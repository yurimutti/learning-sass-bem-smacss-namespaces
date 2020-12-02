const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('menuList');
const block = document.getElementById('inner');


hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    block.classList.toggle('block');
});