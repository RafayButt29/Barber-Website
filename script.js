let btn = document.getElementById("btn")
let menu = document.getElementById("menu-box")
menu.style.right ="-300px"
btn.onclick = function () {
    if (menu.style.right =="-300px") {
        menu.style.right ="0"
    } else{
        menu.style.right ="-300px"
    }
}