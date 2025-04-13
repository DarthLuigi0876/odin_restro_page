import './style.css';
import burger from './assets/burger.png';

export function loadHomepage(){
    const content = document.getElementById('content');
    content.innerHTML = '';

    const title = document.createElement('h1');
    title.textContent = 'GRILLED ON COAL';
    title.classList.add('title');

    const mascot = document.createElement('img');
    mascot.src = burger;
    mascot.alt = 'Grilled On Coal mascot';
    mascot.style.width = '200px';
    mascot.style.align = 'center';

    const description = document.createElement('p');
    description.textContent = 'Welcome to Grilled On Coal, where we serve the best grilled burgers in town! Our burgers are made with fresh ingredients and grilled to perfection. Come and taste the difference!';
    description.classList.add('description');

    return [title, mascot, description];
}