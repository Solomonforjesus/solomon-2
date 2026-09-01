(function () {
  function ensureMeta(selector, attributes) {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement("meta");
      document.head.appendChild(element);
    }

    Object.entries(attributes).forEach(([name, value]) => {
      element.setAttribute(name, value);
    });

    return element;
  }

  function installHomepageSeo() {
    const canonicalUrl = "https://www.solomonforjesus.com/";
    const pageTitle = "Solomon For Jesus | Biblical Answers, Christian Articles & Hope in Jesus Christ";
    const description = "Ask biblical questions, explore Christian articles, request prayer, and discover clear Gospel-centered answers about Jesus Christ, Scripture, forgiveness, suffering, salvation, and eternal life.";
    const imageUrl = "https://www.solomonforjesus.com/ChatGPT%20Image%20Jun%2027,%202026,%2011_30_33%20AM.png";

    document.title = pageTitle;

    ensureMeta('meta[name="description"]', { name: "description", content: description });
    ensureMeta('meta[name="robots"]', { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" });
    ensureMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    ensureMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Solomon For Jesus" });
    ensureMeta('meta[property="og:title"]', { property: "og:title", content: pageTitle });
    ensureMeta('meta[property="og:description"]', { property: "og:description", content: description });
    ensureMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    ensureMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: pageTitle });
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    if (!document.querySelector("h1")) {
      const heading = document.createElement("h1");
      heading.textContent = "Solomon For Jesus";
      heading.setAttribute("aria-label", "Solomon For Jesus");
      Object.assign(heading.style, {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: "0"
      });
      document.body.insertBefore(heading, document.body.firstChild);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": canonicalUrl + "#website",
          "url": canonicalUrl,
          "name": "Solomon For Jesus",
          "alternateName": "Solomon 2.0",
          "description": description,
          "inLanguage": "en-US",
          "publisher": { "@id": canonicalUrl + "#organization" }
        },
        {
          "@type": "Organization",
          "@id": canonicalUrl + "#organization",
          "name": "Solomon For Jesus",
          "url": canonicalUrl,
          "description": "A free Christian ministry resource offering Gospel-centered biblical answers, prayer access, Bible learning, and Christian reading resources.",
          "logo": {
            "@type": "ImageObject",
            "url": imageUrl
          }
        }
      ]
    };

    let script = document.getElementById("solomonStructuredData");
    if (!script) {
      script = document.createElement("script");
      script.id = "solomonStructuredData";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }

  installHomepageSeo();

  function installFeaturedJoyArticle() {
    const featureSection = document.querySelector(".article-feature-section");
    const featureCard = featureSection && featureSection.querySelector(".article-feature-card");
    if (!featureCard) return;

    const title = featureCard.querySelector("h2");
    const paragraphs = featureCard.querySelectorAll(":scope > p:not(.article-feature-label)");
    const oldButton = featureCard.querySelector(".article-open-link");

    featureSection.setAttribute("aria-labelledby", "joyFeatureTitle");
    if (title) {
      title.id = "joyFeatureTitle";
      title.textContent = "JOY!!! — The Gladness No Circumstance Can Take Away";
    }

    paragraphs.forEach((paragraph, index) => {
      if (index === 0) {
        paragraph.textContent = "There is joy in Jesus Christ. Not painted-on happiness or pretending life is easy, but the deep gladness of knowing that Jesus loves you, receives you, and holds you through every season of life.";
      } else if (index === 1) {
        paragraph.textContent = "For the hurting, the curious, the lost, the drifting, the young, the old, the sick, and even those facing death: Jesus Christ is alive, the Gospel is good news, and there is still reason to rejoice.";
      } else {
        paragraph.remove();
      }
    });

    if (oldButton) {
      const link = document.createElement("a");
      link.className = "article-open-link";
      link.href = "/article.html?slug=joy-the-gladness-no-circumstance-can-take-away";
      link.textContent = "Read the full article →";
      oldButton.replaceWith(link);
    }

    document.querySelectorAll('.article-link-list [data-modal-target="hurtDeeplyModal"]').forEach((button) => button.remove());
  }

  installFeaturedJoyArticle();

  const container = document.getElementById("readingLibraryCards");

  if (container) {
    fetch("/articles/manifest.json")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load Reading Library.");
        return response.json();
      })
      .then((articles) => {
        articles
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .forEach((article) => {
            const card = document.createElement("article");
            card.className = "reading-library-card";

            const category = document.createElement("p");
            category.className = "reading-library-category";
            category.textContent = article.category;

            const title = document.createElement("h3");
            const link = document.createElement("a");
            link.href = `/article.html?slug=${encodeURIComponent(article.slug)}`;
            link.textContent = article.title;
            title.appendChild(link);

            const description = document.createElement("p");
            description.textContent = article.description;

            const readLink = document.createElement("a");
            readLink.className = "reading-library-read";
            readLink.href = link.href;
            readLink.textContent = "Read the article →";

            card.append(category, title, description, readLink);
            container.appendChild(card);
          });
      })
      .catch(() => {
        container.innerHTML = '<p class="reading-library-error">The Reading Library could not be loaded. Please try again.</p>';
      });
  }

  const requestedModal = new URLSearchParams(window.location.search).get("open");
  if (requestedModal === "stillTimeModal") {
    window.addEventListener("DOMContentLoaded", () => {
      const modal = document.getElementById("stillTimeModal");
      if (modal) {
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        history.replaceState({}, "", window.location.pathname);
      }
    });
  }

  const CHAT_STORAGE_KEY = "solomonConversationV1";
  const CHAT_ACTIVITY_KEY = "solomonConversationLastActivityV1";
  const CHAT_INACTIVITY_TIMEOUT_MS = 3 * 60 * 60 * 1000;
  const MAX_STORED_MESSAGES = 40;
  const MAX_CONTEXT_MESSAGES = 16;

  function clearStoredConversation() {
    localStorage.removeItem(CHAT_STORAGE_KEY);
    localStorage.removeItem(CHAT_ACTIVITY_KEY);
  }

  function conversationHasExpired() {
    const lastActivity = Number(localStorage.getItem(CHAT_ACTIVITY_KEY));
    return !Number.isFinite(lastActivity) || lastActivity <= 0 || Date.now() - lastActivity > CHAT_INACTIVITY_TIMEOUT_MS;
  }

  function loadConversation() {
    try {
      const rawSaved = localStorage.getItem(CHAT_STORAGE_KEY);
      if (!rawSaved) return [];

      if (conversationHasExpired()) {
        clearStoredConversation();
        return [];
      }

      const saved = JSON.parse(rawSaved);
      if (!Array.isArray(saved)) return [];

      return saved
        .filter((item) => item && (item.role === "user" || item.role === "assistant") && typeof item.content === "string")
        .slice(-MAX_STORED_MESSAGES);
    } catch (error) {
      clearStoredConversation();
      return [];
    }
  }

  let conversation = loadConversation();

  function saveConversation() {
    try {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(conversation.slice(-MAX_STORED_MESSAGES)));
      localStorage.setItem(CHAT_ACTIVITY_KEY, String(Date.now()));
    } catch (error) {
    }
  }

  function expireConversationIfInactive(messagesElement) {
    if (conversation.length === 0 || !conversationHasExpired()) return;

    conversation = [];
    clearStoredConversation();
    if (messagesElement) messagesElement.innerHTML = "";
  }

  function appendChatMessage(messagesElement, role, content) {
    const row = document.createElement("div");
    row.className = "message";

    const label = document.createElement("span");
    label.className = role === "user" ? "user" : "solomon";
    label.textContent = role === "user" ? "You:" : "Solomon:";

    row.appendChild(label);
    row.appendChild(document.createTextNode(" " + content));
    messagesElement.appendChild(row);
    return row;
  }

  function restoreConversation() {
    const messages = document.getElementById("messages");
    if (!messages || conversation.length === 0) return;

    messages.innerHTML = "";
    conversation.forEach((item) => appendChatMessage(messages, item.role, item.content));
    messages.scrollTop = messages.scrollHeight;
  }

  function getSiteAnswer(text) {
    const normalized = text.toLowerCase();

    const pastorIntent = /\b(pastor|minister|preacher|clergy)\b/.test(normalized) &&
      /\b(talk|speak|contact|email|reach|message|help|counsel|counseling|advice)\b/.test(normalized);

    if (pastorIntent) {
      return "Yes. Use the “Email the Pastor” button directly below this conversation. It will open your email so you can contact the ministry privately for pastoral guidance, prayer, or a personal conversation.";
    }

    if (/\b(prayer request|pray for me|request prayer|need prayer)\b/.test(normalized)) {
      return "I would be honored to pray with you here. You can also use the “Prayer Request” button below the conversation to begin a prayer request, and the “Email the Pastor” button if you would like personal pastoral contact.";
    }

    const explicitTriviaIntent = /\b(bible trivia|trivia game|play trivia|bible game|game for (?:my )?(?:child|children|kid|kids))\b/.test(normalized);
    const childAudienceIntent = /\b(child|children|kid|kids|boy|boys|girl|girls|son|sons|daughter|daughters|grandchild|grandchildren|grandson|granddaughter|twin|twins)\b/.test(normalized) &&
      /\b(enjoy|fun|play|game|activity|something|anything|do|try|like)\b/.test(normalized);
    const childAgeIntent = /\b(?:[7-9]|1[0-2])(?:[- ]?year[- ]?old| years? old)?\b/.test(normalized) &&
      /\b(child|children|kid|kids|boy|boys|girl|girls|son|sons|daughter|daughters|grandchild|grandchildren|grandson|granddaughter|twin|twins)\b/.test(normalized);

    if (explicitTriviaIntent || childAudienceIntent || childAgeIntent) {
      return "Yes. They may enjoy Bible Trivia with Solomon. It is designed especially for children ages 7–12, so eight-year-olds are right in the intended age range. Use the “Bible Trivia with Solomon” button directly below this conversation to open the game.";
    }

    const shareIntent = /\b(share|send|give|show|forward)\b/.test(normalized) &&
      /\b(this page|this site|website|site|solomon|link|url|someone|friend|family)\b/.test(normalized);

    if (shareIntent) {
      return "Use the “Share Solomon” button directly below this conversation. On supported phones, tablets, and computers it opens the device’s sharing options; otherwise it copies the Solomon page link so you can send it to someone.";
    }

    if (/\b(reading library|articles|christian articles|read an article)\b/.test(normalized)) {
      return "Yes. Solomon has a Reading Library with Christian articles on Jesus Christ, the Gospel, forgiveness, suffering, the Bible, eternity, and other subjects. Scroll down to the Reading Library and choose any article you would like to read.";
    }

    if (/\b(academy|bible course|bible lessons|study course|christian academy)\b/.test(normalized)) {
      return "Yes. Solomon Christian Academy is the structured Bible-learning part of the Solomon ministry. You can open the Academy from the Solomon site and work through its lessons at your own pace.";
    }

    if (/\b(what can you do|what does this site do|site features|what is on this site|help me use the site)\b/.test(normalized)) {
      return "Along with answering questions from a biblical Christian perspective, Solomon can help you reach Prayer Request, Email the Pastor, Bible Trivia, the Reading Library, Solomon Christian Academy, and the Share Solomon feature. Tell me what you are looking for and I will point you in the right direction.";
    }

    return null;
  }

  function buildContextMessage(currentText) {
    const prior = conversation.slice(0, -1).slice(-MAX_CONTEXT_MESSAGES);
    if (prior.length === 0) return currentText;

    const transcript = prior
      .map((item) => `${item.role === "user" ? "User" : "Solomon"}: ${item.content}`)
      .join("\n");

    return [
      "Use this prior Solomon conversation only as context for continuity. Answer the current user message naturally and do not mention this transcript unless it is relevant.",
      "",
      "PRIOR CONVERSATION:",
      transcript,
      "",
      "CURRENT USER MESSAGE:",
      currentText
    ].join("\n");
  }

  function slugifyArticleTitle(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function installLegacyArticleShareFix() {
    document.addEventListener(
      "click",
      async (event) => {
        const button = event.target.closest("button");
        if (!button || button.textContent.trim() !== "Share This Article") return;

        const box = button.closest(".article-modal-box");
        if (!box) return;

        const heading = box.querySelector("h2");
        const titleText = heading ? heading.textContent.trim() : "Solomon For Jesus Reading Library";
        const modal = box.closest(".faith-modal");
        const explicitSlug = modal && modal.dataset.articleSlug;
        const slug = explicitSlug || slugifyArticleTitle(titleText);
        if (!slug) return;

        const url = `${window.location.origin}/article.html?slug=${encodeURIComponent(slug)}`;
        const shareText = `${titleText} — Solomon For Jesus\n\n${url}`;

        event.preventDefault();
        event.stopImmediatePropagation();

        if (navigator.share) {
          try {
            await navigator.share({ title: titleText, text: shareText, url });
            return;
          } catch (error) {
            if (error && error.name === "AbortError") return;
          }
        }

        try {
          await navigator.clipboard.writeText(url);
          window.alert("Article link copied.");
        } catch (error) {
          window.prompt("Copy this article link:", url);
        }
      },
      true
    );
  }

  function installConversationContinuity() {
    const input = document.getElementById("userInput");
    const messages = document.getElementById("messages");
    if (!input || !messages || typeof window.sendMessage !== "function") return;

    restoreConversation();

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        window.sendMessage();
      }
    });

    window.sendMessage = async function sendMessageWithContinuity() {
      const text = input.value.trim();
      if (!text) return;

      expireConversationIfInactive(messages);

      appendChatMessage(messages, "user", text);
      conversation.push({ role: "user", content: text });
      conversation = conversation.slice(-MAX_STORED_MESSAGES);
      saveConversation();
      input.value = "";

      const siteAnswer = getSiteAnswer(text);
      if (siteAnswer) {
        appendChatMessage(messages, "assistant", siteAnswer);
        conversation.push({ role: "assistant", content: siteAnswer });
        conversation = conversation.slice(-MAX_STORED_MESSAGES);
        saveConversation();
        messages.scrollTop = messages.scrollHeight;
        return;
      }

      const thinkingRow = appendChatMessage(messages, "assistant", "Thinking...");
      messages.scrollTop = messages.scrollHeight;

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: buildContextMessage(text) })
        });

        const data = await response.json();
        const reply = data.reply || data.error || "I could not answer that yet. Please try again.";

        thinkingRow.innerHTML = "";
        const label = document.createElement("span");
        label.className = "solomon";
        label.textContent = "Solomon:";
        thinkingRow.appendChild(label);
        thinkingRow.appendChild(document.createTextNode(" " + reply));

        if (data.reply) {
          conversation.push({ role: "assistant", content: data.reply });
          conversation = conversation.slice(-MAX_STORED_MESSAGES);
          saveConversation();
        }
      } catch (error) {
        thinkingRow.innerHTML = "";
        const label = document.createElement("span");
        label.className = "solomon";
        label.textContent = "Solomon:";
        thinkingRow.appendChild(label);
        thinkingRow.appendChild(document.createTextNode(" Something went wrong. Please try again."));
      }

      messages.scrollTop = messages.scrollHeight;
    };
  }

  installLegacyArticleShareFix();
  installConversationContinuity();
})();
