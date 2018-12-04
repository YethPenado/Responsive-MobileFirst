// funcion para el menu
let btn = false;
const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');
function showMenu(){
    if (btn === false) {
        menu.classList.remove("ocultar");
        btn = true;
    }else if (btn === true) {
      menu.className = "ocultar";
        btn = false;
    }
    console.log("hola mundo");
}
hamburguer.addEventListener('click', showMenu);
// fin funcion para el menu