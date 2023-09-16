//Nav Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("nav-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("nav-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

//burger
const burger = document.querySelector("#burger");
const navMenu = document.querySelector("#nav-menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger-active");
  navMenu.classList.toggle("hidden");
});

// Klik diluar burger
window.addEventListener("click", function (e) {
  if (e.target != burger && e.target != navMenu) {
    burger.classList.remove("burger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");
const themeStatus = document.querySelector("#theme-status");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
    themeStatus.innerText = "🌛";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
    themeStatus.innerText = "🌞";
  }
});

// Pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
  themeStatus.innerText = "🌛";
} else {
  darkToggle.checked = false;
  themeStatus.innerText = "🌞";
}

// read more paragraf
const readMore = document.getElementById("read-more");
const secondParagraf = document.getElementById("second-paragraf");

readMore.addEventListener("click", function() {
  secondParagraf.classList.remove("hidden");
  readMore.remove();
})

//more certificate
const moreCertificate = document.getElementById("more-certificate");
const btnMoreCertificateVis = document.getElementById("btn-more-certificate-vis");
const btnMoreCertificateInv = document.getElementById("btn-more-certificate-inv");

// btnMoreCertificateInv.style.display = "none";

btnMoreCertificateVis.addEventListener("click", function() {
  moreCertificate.classList.remove("hidden");
  moreCertificate.classList.add("flex");

  btnMoreCertificateVis.classList.add("hidden");
  btnMoreCertificateInv.classList.remove("hidden")
});

btnMoreCertificateInv.addEventListener("click", function() {
  moreCertificate.classList.add("hidden");

  btnMoreCertificateVis.classList.remove("hidden");
  btnMoreCertificateInv.classList.add("hidden")
});



