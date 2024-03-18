const toggleEl = document.getElementById("toggle");

const darkRadio = document.getElementById("dark");

const lightRadio = document.getElementById("light");

const body = document.querySelector("body");

let darkMode = false;
let userModeSet = false;

const loadMode = () => {
  const esdDarkMode = JSON.parse(localStorage.getItem("esdDarkMode"));

  if (esdDarkMode === null) {
    darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    userModeSet = false;
  } else {
    userModeSet = true;
    darkMode = esdDarkMode;
  }
};

const changeMode = () => {
  body.classList = darkMode ? "dark" : "light";
  darkRadio.checked = darkMode;
  lightRadio.checked = !darkMode;
};

loadMode();
changeMode();

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark");
const lightModeQuery = window.matchMedia("(prefers-color-scheme: light)");

darkModeQuery.addEventListener("change", (event) => {
  if (!userModeSet) {
    if (event.matches) {
      darkMode = true;
    } else {
      darkMode = false;
    }
    changeMode();
  }
});

lightModeQuery.addEventListener("change", (event) => {
  if (!userModeSet) {
    if (!event.matches) {
      darkMode = true;
    } else {
      darkMode = false;
    }
    changeMode();
  }
});

toggleEl.addEventListener("click", function () {
  darkMode = darkRadio.checked ? true : false;
  changeMode();
  localStorage.setItem("esdDarkMode", JSON.stringify(darkMode));
  userModeSet = true;
});
