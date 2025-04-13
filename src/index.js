import { loadHomepage } from "./home";
import { loadMenuPage } from "./menu";
import { loadAboutPage } from "./about";
import './style.css';

const home = document.getElementById('homeButton');
const menu = document.getElementById('menuButton');
const about = document.getElementById('aboutButton');
const logo = document.getElementById('logoButton');

content = document.getElementById('content');
content.innerHTML = '';

function loadPage(elements =[]) {
    elements.forEach(element =>{
        content.appendChild(element);
    })
}

const initialElements = loadHomepage();
loadPage(initialElements);


logo.addEventListener('click', () => {
    loadPage(loadHomepage());
})
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