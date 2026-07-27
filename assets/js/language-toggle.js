(function () {
  "use strict";

  var storageKey = "zefenglu-language";

  function applyLanguage(language) {
    var useChinese = language === "zh";
    document.body.classList.toggle("lang-zh", useChinese);
    document.body.classList.toggle("lang-en", !useChinese);
    document.documentElement.lang = useChinese ? "zh-CN" : "en";

    var toggle = document.getElementById("language-toggle");
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        useChinese ? "Switch to English" : "切换至中文版"
      );
      toggle.setAttribute("title", useChinese ? "Switch to English" : "切换至中文版");
    }
  }

  function storedLanguage() {
    try {
      return window.localStorage.getItem(storageKey) === "zh" ? "zh" : "en";
    } catch (error) {
      return "en";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(storedLanguage());

    var toggle = document.getElementById("language-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      var nextLanguage = document.body.classList.contains("lang-zh") ? "en" : "zh";
      applyLanguage(nextLanguage);
      try {
        window.localStorage.setItem(storageKey, nextLanguage);
      } catch (error) {
        // The switch still works when browser storage is unavailable.
      }
    });
  });
})();
