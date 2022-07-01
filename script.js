const btnMenu = document.getElementById('buttonMenu');



function showMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', showMenu());