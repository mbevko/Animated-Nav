let button = document.querySelector("button");
let menu = document.querySelector(".menu");
let leftPanel = document.querySelector(".left_panel");
let rightPanel = document.querySelector(".right_panel");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let ul = document.querySelector("ul");

button.addEventListener('click', function () {
  menu.classList.toggle("menu_clicked")
  leftPanel.classList.toggle("left_panel_clicked");
  rightPanel.classList.toggle("right_panel_clicked");
  h1.classList.toggle("h1_clicked");
  p.classList.toggle("p_clicked");
  ul.classList.toggle("ul_clicked");
});