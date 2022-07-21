const lightSideBtn = document.querySelector(".light-side ");
const darktSideBtn = document.querySelector(".dark-side ");
const cssRoot = document.querySelector(":root");
const mainSection = document.querySelector("section");
const navUL = document.querySelector(".nav__links");
const hamnerger = document.getElementById("check");

hamnerger.addEventListener("click", () => {
  navUL.classList.toggle("navULHidden");
  navUL.classList.toggle("navULActive");
});
function toggleDarkLightMode() {
  lightSideBtn.addEventListener("click", () => {
    lightSideBtn.classList.add("dm-active");
    darktSideBtn.classList.remove("dm-active");
    cssRoot.style.setProperty("--bodyColor", "rgba(245, 235, 235, 0.514)");
    cssRoot.style.setProperty("--CompColor", "#eee");
    cssRoot.style.setProperty("--txtColor", "rgb(81, 73, 73)");
    cssRoot.style.setProperty("--buttonsColor", "gray");
    cssRoot.style.setProperty("--SecCompColor", "#fff");
    cssRoot.style.setProperty(
      "--cardsColor",
      "linear-gradient(to right,#38ef7d,#11998e)"
    );
    mainSection.style.boxShadow = "2px 5px 10px #e9ecef";
  });
  darktSideBtn.addEventListener("click", () => {
    darktSideBtn.classList.add("dm-active");
    lightSideBtn.classList.remove("dm-active");
    cssRoot.style.setProperty("--bodyColor", "#111212d6");
    cssRoot.style.setProperty("--CompColor", "#202124");
    cssRoot.style.setProperty("--txtColor", "#eee");
    cssRoot.style.setProperty("--buttonsColor", "#a044ff");
    cssRoot.style.setProperty("--SecCompColor", "#41464b");
    cssRoot.style.setProperty(
      "--cardsColor",
      "linear-gradient(to right, #E100FF, #7F00FF)"
    );
    mainSection.style.boxShadow = "2px 5px 10px #212529";
  });
}
toggleDarkLightMode();
