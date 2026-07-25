(function () {
  const container = document.getElementById("readingLibraryCards");
  if (!container) return;

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
})();
