import { loadHomepage } from "./home";
import { loadMenuPage } from "./menu";
import { loadAboutPage } from "./about";

const home = document.getElementById('homeButton');
const menu = document.getElementById('menuButton');
const about = document.getElementById('aboutButton');


content = document.getElementById('content');
content.innerHTML = '';

function loadPage(elements =[]) {
    elements.forEach(element =>{
        content.appendChild(element);
    })
}

const initialElements = loadHomepage();
loadPage(initialElements);


home.addEventListener('click', () => {
    loadPage(loadHomepage());
});

menu.addEventListener('click', () => {
    loadPage(loadMenuPage());
});

about.addEventListener('click', () => {
    loadPage(loadAboutPage());
}
);