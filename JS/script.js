const hamburger = document.querySelector('.hamburger')
const hamburgericon = document.querySelector('.hamburger i')
const dropdownmenu = document.querySelector('.dropdown ')

hamburger.onclick = function(){
    dropdownmenu.classList.toggle('open')
    const isopen = dropdownmenu.classList.contains('open')

    hamburgericon.classList = isopen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars '
}

console.log("dev Mishra");
