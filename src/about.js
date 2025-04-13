export function loadAboutPage(){
    const content = document.getElementById('content');
    content.innerHTML = '';

    const about = document.createElement('div');
    about.classList.add('about');
    about.innerHTML = `
        <h1>About Us</h1>
        <p>Welcome to our restaurant! We are dedicated to providing you with the best dining experience possible.</p>
        <p>Our team is passionate about food and service, and we strive to make every visit memorable.</p>
        <p>Thank you for choosing us!</p>
    `;
    return [about];
}