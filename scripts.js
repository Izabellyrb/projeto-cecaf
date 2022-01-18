/*enrollment page - buttons*/

var listes = document.querySelector('.elementaryS');
var listms =  document.querySelector('.middleS')
var img = document.querySelector('.kids1')
var img2 = document.querySelector('.kids2')

function show() {
    listes.classList.toggle('on')
    img.classList.toggle('on')
    listms.classList.remove('on')
    img2.classList.remove('on')
}

function show2() {
    listms.classList.toggle('on')
    img2.classList.toggle('on')
    listes.classList.remove('on')
    img.classList.remove('on')
}



/* hamburguer menu */

var menuToggle =  document.querySelector('.menuToggle')
var nav = document.querySelector('.menuSection')

function menuOnClick() {
    menuToggle.classList.toggle('on')
    nav.classList.toggle('on')   
}
