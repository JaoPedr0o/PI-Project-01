const person = document.querySelector('.person');
const door = document.querySelector('.door');
const hortac = document.querySelector('.hortac');
const açouguec = document.querySelector('.açouguec');

//Movimentação 
const keysPressed = {};
let position = { top: 0, left: 0 };

const sprites = {
    idle: 'img-game/player/player-idle-dow.gif',
    right: 'img-game/player/player-walk-right.gif',
    left: 'img-game/player/player-walk-left.gif',
    up: 'img-game/player/player-walk-up.gif',
    down: 'img-game/player/player-walk-down.gif'
};


function updatePosition() {
    person.style.bottom = `${position.top}px`;
    person.style.left = `${position.left}px`;
}

function isMoving() {
    return Object.values(keysPressed).some(Boolean);
}

function moveCharacter() {
    const step = 16;

    let movingLeft = keysPressed['a'] || keysPressed['A'];
    let movingRight = keysPressed['d'] || keysPressed['D'];
    let movingUp = keysPressed['w'] || keysPressed['W'];
    let movingDown = keysPressed['s'] || keysPressed['S'];

    // Define a sprite baseado no movimento, para não travar o gif
    if (isMoving()) {
        if (movingRight) {
            person.classList.add('moving-right');
        } else if (movingLeft) {
            person.classList.add('moving-left');
        } else if (movingUp) {
            person.classList.add('moving-up');
        } else if (movingDown) {
            person.classList.add('moving-down');
        }
    } else {
        person.className = 'person'; // Remove todas as classes de movimento, para não travar na colisão
    }

    if (movingLeft) {
        position.left -= step;
    }
    if (movingRight) {
        position.left += step;
    }
    if (movingUp) {
        position.top += step;
        console.log("Top: "+position.top);
    }
    if (movingDown) {
        position.top -= step;
        console.log("Down: "+position.top);
    }
    //Anuncio da colisão
    updatePosition();
    var colisao = detectarColisao();
    console.log(colisao);
    if (colisao == 'door' ) {
        person.className = 'person';
        if (confirm("Deseja entrar no mercadinho?")) {
            window.open("casa.html", "_blank");
           
        } else {
          
        }    
        }
    if (colisao == 'hortac') {
            person.className = 'person';
        if (confirm("Deseja entrar na horta?")) {
            window.open("horta.html", "_blank");
               
        } else {
               
        }
        }
    if (colisao == 'açouguec') {
            person.className = 'person';
        if (confirm("Deseja entrar no açougue?")) {
            window.open("açougue.html", "_blank");
               
        } else {
               
        }
        }    
}


document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    moveCharacter();
});

document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];

    if (!isMoving()) {
        person.className = 'person'; // Remove todas as classes de movimento
    }
});
//Parametros da colisão

function detectarColisao() {
    // Checando se há colisão com a porta
    const doorRect = door.getBoundingClientRect();
    const personRect = person.getBoundingClientRect(); 
    if (personRect.left < doorRect.right && personRect.right > doorRect.left && personRect.top < doorRect.bottom && personRect.bottom > doorRect.top ) {
      console.log("Colisão detectada em X: " + personRect.x + " Y: " + personRect.y);
      resetPosition(350,555);
      return 'door';
   } else {
      console.log (doorRect);
  }

   //Checando se há colisão com a horta
    const hortacRect = hortac.getBoundingClientRect();
    if (personRect.left < hortacRect.right && personRect.right > hortacRect.left && personRect.top < hortacRect.bottom && personRect.bottom > hortacRect.top ) {
        console.log("Colisão detectada em X: " + personRect.x + " Y: " + personRect.y);
        resetPosition(350,555);
        return 'hortac';
    } else {
        console.log (hortacRect);
    }

    //Checando se há colisão com o açougue
    const açouguecRect = açouguec.getBoundingClientRect();
    if (personRect.left < açouguecRect.right && personRect.right > açouguecRect.left && personRect.top < açouguecRect.bottom && personRect.bottom > açouguecRect.top ) {
        console.log("Colisão detectada em X: " + personRect.x + " Y: " + personRect.y);
        resetPosition(350,555);
        return 'açouguec';
    } else {
        console.log (açouguecRect);
    }




   // let modalCasa1 = document.getElementById("modal-casa1")
   // modalCasa1.addEventListener("click", function () {
       // modalCasa1.classList("modalGameActive")
    //})
}
//Reset 
function resetPosition(topo, esquerda) {
    position = { top: topo, left: esquerda };
    updatePosition();
    keysPressed['w'] = keysPressed['W'] = keysPressed['s'] = keysPressed['S'] = keysPressed['a'] = keysPressed['A'] = keysPressed['d'] = keysPressed['D'] = false;
} 

