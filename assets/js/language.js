(function () {
  var language = "zh";
  var buttons = document.querySelectorAll(".language-toggle");

  function setLanguage(next) {
    language = next;
    document.body.classList.toggle("lang-zh", next === "zh");
    document.body.classList.toggle("lang-en", next === "en");
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
    document.title = next === "zh" ? "卢泽丰 | 广州大学" : "Zefeng Lu | Guangzhou University";
    buttons.forEach(function (button) {
      button.textContent = next === "zh" ? "EN" : "中";
      button.setAttribute("aria-label", next === "zh" ? "Switch to English" : "切换到中文");
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(language === "zh" ? "en" : "zh");
    });
  });

  setLanguage("zh");
})();
