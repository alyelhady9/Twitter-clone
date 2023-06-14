let closeFooterBtn = document.getElementById("close-footer")

let mobileFooter = document.querySelector(".mobile-footer")

closeFooterBtn.addEventListener("click", () => {
    mobileFooter.classList.add("disappear")
})

let overlay = document.querySelector(".loading-overlay")
let main = document.querySelector(".main")
window.onload = function () {
    setInterval(() => {
        overlay.style.display = "none"
        main.classList.remove("main-overlay")
    }, 3000);
}