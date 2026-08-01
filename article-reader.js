(function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const title = document.getElementById("articleTitle");
  const meta = document.getElementById("articleMeta");
  const body = document.getElementById("articleBody");
  const stillTimeArticleReturnKey = "solomonStillTimeArticleReturn";

  function currentArticleUrl() {
    return `${window.location.pathname}${window.location.search}${window.location.hash}`;
  }

  function saveArticleReturnPosition() {
    const returnState = {
      url: currentArticleUrl(),
      scrollY: Math.max(0, Math.round(window.scrollY)),
      savedAt: Date.now()
    };

    sessionStorage.setItem(stillTimeArticleReturnKey, JSON.stringify(returnState));
  }

  function installStillTimeLinks() {
    body.querySelectorAll('a[href]').forEach((link) => {
      let destination;

      try {
        destination = new URL(link.href, window.location.origin);
      } catch (error) {
        return;
      }

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
      sessionStorage.removeItem(stillTimeArticleReturnKey);
      return;
    }

    const isCurrentArticle = returnState.url === currentArticleUrl();
    const isRecent = Date.now() - Number(returnState.savedAt || 0) < 2 * 60 * 60 * 1000;

    if (!isCurrentArticle || !isRecent) {
      sessionStorage.removeItem(stillTimeArticleReturnKey);
      return;
    }

    const savedScrollY = Number(returnState.scrollY) || 0;

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: savedScrollY, left: 0, behavior: "auto" });
        sessionStorage.removeItem(stillTimeArticleReturnKey);
      });
    });
  }

  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    body.innerHTML = "<p>That article could not be found.</p>";
    return;
  }

  fetch(`/articles/${slug}.json`)
    .then((response) => {
      if (!response.ok) throw new Error("Article not found");
      return response.json();
    })
    .then((article) => {
      document.title = `${article.title} | Solomon 2.0`;
      title.textContent = article.title;
      meta.textContent = `${article.category} · ${new Date(article.date + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`;
      body.innerHTML = article.content;
      installStillTimeLinks();
      restoreArticlePosition();
    })
    .catch(() => {
      title.textContent = "Article Not Found";
      meta.textContent = "";
      body.innerHTML = '<p>We could not load this article. Please return to the <a href="/#reading-library">Reading Library</a>.</p>';
    });
})();
