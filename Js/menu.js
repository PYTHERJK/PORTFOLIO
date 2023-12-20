// pegar elemento pelo id
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')

// criando evento para abrir o menu
btnMenu.addEventListener('click' , ()=>{
    menu.classList.add('abrir-menu')
})
// criando evento para fechar o menu
menu.addEventListener('click' , ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click' , ()=>{
    menu.classList.remove('abrir-menu')
})

