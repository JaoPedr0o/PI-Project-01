//Declaração de Variáveis
let modal = document.getElementById("modal-list")
let btOpenList = document.getElementById("open-list")
let btCloseList = document.getElementById("close-list")
let headerBanner =  document.getElementById("header-banner")



//Abertura e fechamento da modal
btOpenList.addEventListener("click", function () {
  modal.classList.remove("modal-active")
})

btCloseList.addEventListener("click", function () {
  modal.classList.add("modal-active")
})