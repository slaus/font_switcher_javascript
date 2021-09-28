/* SCRIPT */

window.addEventListener('DOMContentLoaded', () => {

    /* LOCAL STORAGE */

    const getApplicationFontSize = () => {
        size = window.getComputedStyle(document.body).fontSize;
        if (localStorage.getItem('fontSize') === null || localStorage.getItem('fontSize') === 'undefined') {
            localStorage.setItem('fontSize', size);
        }
        document.querySelector('html').style.fontSize = localStorage.getItem('fontSize');
    };

    const setApplicationFontSize = (parameter) => {
        localStorage.setItem('fontSize', parameter);
    };


    /* FONT SWITCHER */

    const fontSwitcher = document.querySelector('[data-size]');

    let size;

    getApplicationFontSize();

    fontSwitcher.addEventListener('click', (e) => {
        e.preventDefault();
            size = parseInt(size, 10) + parseInt(fontSwitcher.dataset.size, 10);
        if (size == 20) size = 13;
        document.querySelector('html').style.fontSize = `${size}px`;

        setApplicationFontSize(`${size}px`);
    });
});
