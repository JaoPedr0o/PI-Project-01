//Declaração de Variáveis
let modal = document.getElementById("modal-list")
let btOpenList = document.getElementById("open-list")
let btCloseList = document.getElementById("close-list")
let headerBanner =  document.getElementById("header-banner")
let body = document.querySelector("body")
let cart = document.getElementById("cart-page")



//Abertura e fechamento da modal
btOpenList.addEventListener("click", function () {
  modal.classList.remove("modal-active")
  body.style.overflow = "hidden"
})

btCloseList.addEventListener("click", function () {
  modal.classList.add("modal-active")
  body.style.overflow = "visible"
  body.style.overflowX = "hidden"
})

