(function () {
  var buttons = document.querySelectorAll(".langs [data-lang]");
  if (!buttons.length) return;

  function apply(lang) {
    document.documentElement.lang = lang;
    buttons.forEach(function (button) {
      button.setAttribute("aria-selected", button.getAttribute("data-lang") === lang ? "true" : "false");
    });
    document.querySelectorAll(".copy").forEach(function (copy) {
      copy.hidden = copy.getAttribute("data-copy") !== lang;
    });
    document.querySelectorAll("[data-en][data-tr]").forEach(function (node) {
      node.textContent = node.getAttribute(lang === "tr" ? "data-tr" : "data-en");
    });
    document.querySelectorAll(".pages a[href], .links a[href]").forEach(function (link) {
      var href = link.getAttribute("href").split("#")[0];
      link.setAttribute("href", href + "#" + lang);
    });
    var title = document.querySelector("h1");
    if (title && title.hasAttribute("data-en")) {
      document.title = title.textContent + " — Somnia AI";
    }
  }

  var fromHash = (location.hash || "").replace("#", "").toLowerCase();
  var initial = fromHash === "tr" || fromHash === "en"
    ? fromHash
    : ((navigator.language || "").toLowerCase().indexOf("tr") === 0 ? "tr" : "en");
  apply(initial);

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var lang = button.getAttribute("data-lang");
      apply(lang);
      history.replaceState(null, "", "#" + lang);
    });
  });

  window.addEventListener("hashchange", function () {
    var lang = (location.hash || "").replace("#", "").toLowerCase();
    if (lang === "en" || lang === "tr") apply(lang);
  });
})();
