// dùng chung lấy ra 1 hoặc full

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const home_menus = $$('.menu__js')
const container__tabs = $$('.container__tab')


home_menus.forEach((home_menu, index) => {
const container__tab = container__tabs[index]

home_menu.onclick = function () {
    $('.menu__js.active').classList.remove('active')
    $('.container__tab.active').classList.remove('active')

    this.classList.add('active')
    container__tab.classList.add('active')
}
});




