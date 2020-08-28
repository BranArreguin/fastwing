var OpenMenubtn = document.getElementById('burger-button'),
    menu = document.getElementById('menu-container'),
    CloseMenubtn = document.getElementById('close-button');

OpenMenubtn.addEventListener('click', function(){
    menu.classList.add('active');
});

CloseMenubtn.addEventListener('click', function(e){
    e.preventDefault();
    menu.classList.remove('active');
});