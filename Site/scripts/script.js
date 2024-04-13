//Declaração de Variáveis
let modal = document.getElementById("modal-list")
let btOpenList = document.getElementById("open-list")
let btCloseList = document.getElementById("close-list")
let headerBanner =  document.getElementById("header-banner")

//Função que faz a rotação do banner da home 
//NÃO ESTÁ FUNCIONANDO
// headerBanner.style.backgroundImage = "url(/assets/rotative-banner/fruits1-img.jpg)"
function rotativeBanner() {
  let bannerTime = 0
  setInterval(() => {
    if (bannerTime < 4) {
      bannerTime = bannerTime + 1
    } else if (bannerTime = 4 ){
      bannerTime = 1
    }
    headerBanner.style.backgroundImage = "url(/assets/rotative-banner/fruits"+bannerTime+"-img.jpg)"
  }, 10000);
  rotativeBanner()
}
// rotativeBanner()


//Abertura e fechamento da modal
btOpenList.addEventListener("click", function () {
  modal.classList.remove("modal-active")
})

btCloseList.addEventListener("click", function () {
  modal.classList.add("modal-active")
})