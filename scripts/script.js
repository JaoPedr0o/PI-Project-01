//Declaração de Variáveis
let modal = document.getElementById("modal-list")
let btOpenList = document.getElementsByClassName("open-list")
let btCloseList = document.getElementById("close-list")
let headerBanner =  document.getElementById("header-banner")
let body = document.querySelector("body")
let cart = document.getElementById("cart-page")
let modalInfoBtn = document.getElementById("modal-info-btn")
let modalInfo = document.getElementById("modal-info")


//Abertura e fechamento da modal
btOpenList.forEach(element => {
  element.addEventListener("click", function () {
    modal.classList.remove("modal-active")
    body.style.overflow = "hidden"
  })
});


btCloseList.addEventListener("click", function () {
  modal.classList.add("modal-active")
  body.style.overflow = "visible"
  body.style.overflowX = "hidden"
})


modalInfoBtn.addEventListener("click", function () {
  modalInfo.classList.toggle("modal-active")
})


