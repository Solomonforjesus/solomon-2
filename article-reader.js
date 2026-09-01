(function () {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const requestedSlug = params.get("slug");
  const title = document.getElementById("articleTitle");
  const meta = document.getElementById("articleMeta");
  const body = document.getElementById("articleBody");
  const stillTimeArticleReturnKey = "solomonStillTimeArticleReturn";
  const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  function slugify(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function currentArticleUrl() {
    return `${window.location.pathname}${window.location.search}${window.location.hash}`;
  }

  function setCanonicalUrl(slug) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/article.html?slug=${encodeURIComponent(slug)}`;
  }

  function setDescription(description) {
    const content = String(description || "").trim();
    if (!content) return;

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.name = "description";
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.content = content;
  }

  function formatArticleDate(dateValue) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(dateValue || ""))) return "";

    const parsed = new Date(`${dateValue}T12:00:00`);
    if (Number.isNaN(parsed.getTime())) return "";

    return parsed.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  function saveArticleReturnPosition() {
    const returnState = {
      url: currentArticleUrl(),
      scrollY: Math.max(0, Math.round(window.scrollY)),
      savedAt: Date.now()
    };

    try {
      sessionStorage.setItem(stillTimeArticleReturnKey, JSON.stringify(returnState));
    } catch (error) {
      // Navigation should still work if session storage is unavailable.
    }
  }

  function installStillTimeLinks() {
    body.querySelectorAll('a[href]').forEach((link) => {
      let destination;

      try {
        destination = new URL(link.href, window.location.origin);
      } catch (error) {
        return;
      }

      if (destination.origin !== window.location.origin) return;
      if (destination.searchParams.get("open") !== "stillTimeModal") return;

      link.addEventListener("click", (event) => {
        event.preventDefault();
        saveArticleReturnPosition();
        window.location.assign(destination.href);
      });
    });
  }

  function restoreArticlePosition() {
    let returnState;

    try {
      const saved = sessionStorage.getItem(stillTimeArticleReturnKey);
      if (!saved) return;
      returnState = JSON.parse(saved);
    } catch (error) {
      try {
        sessionStorage.removeItem(stillTimeArticleReturnKey);
      } catch (storageError) {
        // Ignore storage cleanup failure.
      }
      return;
    }

    const isCurrentArticle = returnState.url === currentArticleUrl();
    const isRecent = Date.now() - Number(returnState.savedAt || 0) < 2 * 60 * 60 * 1000;

    if (!isCurrentArticle || !isRecent) {
      try {
        sessionStorage.removeItem(stillTimeArticleReturnKey);
      } catch (error) {
        // Ignore storage cleanup failure.
      }
      return;
    }

    const savedScrollY = Number(returnState.scrollY) || 0;

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: savedScrollY, left: 0, behavior: "auto" });
        try {
          sessionStorage.removeItem(stillTimeArticleReturnKey);
        } catch (error) {
          // Ignore storage cleanup failure.
        }
      });
    });
  }

  function renderArticle(article) {
    const articleTitle = String(article.title || "").trim();
    const articleContent = String(article.content || "").trim();

    if (!articleTitle || !articleContent) {
      throw new Error("Article data is incomplete");
    }

    const category = String(article.category || "Reading Library").trim();
    const formattedDate = formatArticleDate(article.date);

    document.title = `${articleTitle} | Solomon 2.0`;
    title.textContent = articleTitle;
    meta.textContent = formattedDate ? `${category} · ${formattedDate}` : category;
    body.innerHTML = articleContent;

    setDescription(article.description || `${articleTitle} — Solomon 2.0 Reading Library.`);
    installStillTimeLinks();
    restoreArticlePosition();
  }

  async function loadModernArticle(slug) {
    const response = await fetch(`/articles/${encodeURIComponent(slug)}.json`, {
      headers: { Accept: "application/json" },
      cache: "no-cache"
    });

    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`Article request failed with ${response.status}`);

    const article = await response.json();
    if (!article || typeof article !== "object") {
      throw new Error("Article response is invalid");
    }

    if (article.slug && article.slug !== slug) {
      throw new Error("Article slug does not match its file name");
    }

    return article;
  }

  async function loadLegacyHomepageArticle(slug) {
    const response = await fetch("/", {
      headers: { Accept: "text/html" },
      cache: "no-cache"
    });

    if (!response.ok) {
      throw new Error(`Homepage article fallback failed with ${response.status}`);
    }

    const homepageHtml = await response.text();
    const parsed = new DOMParser().parseFromString(homepageHtml, "text/html");

    const articleBoxes = Array.from(
      parsed.querySelectorAll(".faith-modal .article-modal-box")
    ).filter((box) => !box.closest(".legal-modal-box"));

    const matchingBox = articleBoxes.find((box) => {
      const heading = box.querySelector("h2");
      return heading && slugify(heading.textContent) === slug;
    });

    if (!matchingBox) return null;

    const clone = matchingBox.cloneNode(true);
    const heading = clone.querySelector("h2");
    const articleTitle = heading ? heading.textContent.trim() : "";

    clone.querySelectorAll(
      ".faith-close, .article-modal-close, .article-share-row, script"
    ).forEach((element) => element.remove());

    if (heading) {
      const clonedHeading = clone.querySelector("h2");
      if (clonedHeading) clonedHeading.remove();
    }

    return {
      slug,
      title: articleTitle,
      category: "Reading Library",
      description: `${articleTitle} — a Solomon 2.0 Reading Library article.`,
      content: clone.innerHTML
    };
  }

  function showNotFound() {
    document.title = "Article Not Found | Solomon 2.0";
    title.textContent = "Article Not Found";
    meta.textContent = "";
    body.innerHTML = '<p>We could not load this article. Please return to the <a href="/#reading-library">Reading Library</a>.</p>';
  }

  async function initializeArticle() {
    const slug = String(requestedSlug || "").trim().toLowerCase();

    if (!slug || !SLUG_PATTERN.test(slug)) {
      showNotFound();
      return;
    }

    setCanonicalUrl(slug);

    try {
      const modernArticle = await loadModernArticle(slug);
      if (modernArticle) {
        renderArticle(modernArticle);
        return;
      }

      const legacyArticle = await loadLegacyHomepageArticle(slug);
      if (legacyArticle) {
        renderArticle(legacyArticle);
        return;
      }

      showNotFound();
    } catch (error) {
      console.error("Solomon article reader error:", error);
      showNotFound();
    }
  }

  initializeArticle();
})();
