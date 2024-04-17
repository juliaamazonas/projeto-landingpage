document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll ('[data-tab-button]');
    const hamburguerMenu = document.querySelector('.hamburguer-menu');
    const menu = document.querySelector('.show-menu');
    
    hamburguerMenu.addEventListener('click', () => {
        menu.classList.toggle('show-menu-active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
            menu.classList.remove('show-menu');
        }
    });


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){

            const botaoAlvo = botao.target.dataset.tabButton;
            const botaoPrincipal = document.querySelector(`[data-tab-id=${botaoAlvo}]`)
            escondeListaProdutos();
            botaoPrincipal.classList.add('shop__content__products__list--is-active');
        })
        
    }


})

function escondeListaProdutos(){
    const containerUl = document.querySelectorAll ('[data-tab-id]');

    for (let i = 0; i < containerUl.length; i++) {
        containerUl[i].classList.remove('shop__content__products__list--is-active');
    }
}