const toggleEl = document.getElementById("toggle");

const darkRadio = document.getElementById("dark");

const lightRadio = document.getElementById("light");

const body = document.querySelector("body");

toggleEl.addEventListener("click", function () {
  body.classList = darkRadio.checked ? "dark" : "light";
});
