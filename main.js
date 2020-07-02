const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('menu-active');
    })
}

const app = () => {
    navSlide();
}

app();