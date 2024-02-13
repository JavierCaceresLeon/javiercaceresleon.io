(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');


    //Función para agregar
    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    //Función para remover
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    })

    

})();