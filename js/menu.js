const iconoMenu = document.querySelector("#menu");
const menu = document.querySelector("#menu_active");
const btn = document.querySelectorAll("#btn");

iconoMenu.addEventListener('click', (e) =>{

    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
    //btn.classList.toggle('opacityBtn')
    btn.forEach( btn => {
        btn.classList.toggle('opacityBtn')
    })  

})