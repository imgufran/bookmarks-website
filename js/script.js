// DOM Elements
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Functions
const onTabClick = function (e) {
  // Deactivate all tabs
  tabs.forEach(tab => {
    tab.children[0].classList.remove("border-b-4", "border-softRed");
  });
  // Hide all panels
  panels.forEach(panel => {
    panel.classList.add("hidden");
  })

  // Activate a new tab and panel based on the target
  e.target.classList.add("border-softRed", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  document.getElementById("panels").getElementsByClassName(classString)[0].classList.remove("hidden");

}

const navToggle = function (e) {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex")

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg")
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg")
  }
}

// Event Listeners
tabs.forEach((tab) => {
  tab.addEventListener("click", onTabClick);
});

// Hamburger button listener
btn.addEventListener("click", navToggle);











