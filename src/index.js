import "./style.css";
import { loadHomepage } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

// loadMenu();
// loadAbout();
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");
const divContent = document.body.querySelector("#content");

function switchToPage(pageToSwitch) {
    divContent.innerHTML = "";
    switch (pageToSwitch) {
        case "home":
            loadHomepage();
            break;
        case "menu":
            loadMenu();
            break;
        case "about":
            loadAbout();
            break;
    }
}

homeButton.addEventListener("click", (event) =>
    switchToPage(event.target.className)
);
menuButton.addEventListener("click", (event) =>
    switchToPage(event.target.className)
);
aboutButton.addEventListener("click", (event) =>
    switchToPage(event.target.className)
);

loadHomepage();
