import { loadHomepage } from "./home";

content = document.getElementById('content');
content.innerHTML = '';

function loadPage(elements =[]) {
    elements.forEach(element =>{
        content.appendChild(element);
    })
}
loadPage(loadHomepage());