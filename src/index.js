import { loadHomepage } from "./home";
import { loadMenuPage } from "./menu";

const home = document.getElementById('home');
const menu = document.getElementById('menu');


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