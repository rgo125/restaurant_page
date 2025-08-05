import "./styles.css";
import loadHomePage from "./homepage.js"
import loadMenuPage from "./menu.js";

var homeButton = document.getElementById("Home");
var menuButton = document.getElementById("Menu");
var aboutButton = document.getElementById("About");

homeButton.addEventListener("click", (e) => {
    content = document.getElementById("content");
    content.innerHTML = " ";
    loadHomePage();
});

menuButton.addEventListener("click", (e) => {
    content = document.getElementById("content");
    content.innerHTML = " ";
    loadMenuPage();
});

