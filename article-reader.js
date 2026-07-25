(function () {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const title = document.getElementById("articleTitle");
  const meta = document.getElementById("articleMeta");
  const body = document.getElementById("articleBody");

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
    })
    .catch(() => {
      title.textContent = "Article Not Found";
      meta.textContent = "";
      body.innerHTML = '<p>We could not load this article. Please return to the <a href="/#reading-library">Reading Library</a>.</p>';
    });
})();
