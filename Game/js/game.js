const person = document.querySelector('.person');
const door = document.querySelector('.door');

const keysPressed = {};
let position = { top: 0, left: 0 };
const sprites = {
    idle: 'img-game/player/player-idle-dow.gif',
    right: 'img-game/player/player-walk-right.gif',
    left: 'img-game/player/player-walk-left.gif',
    up: 'img-game/player/player-walk-up.gif',
    down: 'img-game/player/player-walk-down.gif'
};
let anuncioExibido = false;

function updatePosition() {
    person.style.bottom = `${position.top}px`;
    person.style.left = `${position.left}px`;
}

function isMoving() {
    return Object.values(keysPressed).some(Boolean);
}

function moveCharacter() {
    const step = 4;

    let movingLeft = keysPressed['a'] || keysPressed['A'];
    let movingRight = keysPressed['d'] || keysPressed['D'];
    let movingUp = keysPressed['w'] || keysPressed['W'];
    let movingDown = keysPressed['s'] || keysPressed['S'];

    // Define a sprite baseado no movimento
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
        person.className = 'person'; // Remove todas as classes de movimento
    }

    if (movingLeft) {
        position.left -= step;
    }
    if (movingRight) {
        position.left += step;
    }
    if (movingUp) {
        position.top += step;
    }
    if (movingDown) {
        position.top -= step;
    }

    updatePosition();

    if (detectarColisao() && !anuncioExibido) {
        anuncioExibido = true;
        if (confirm("Deseja entrar na casa?")) {
            window.open("casa.html", "_blank");
            resetPosition();
        } else {
            resetPosition();
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

function detectarColisao() {
    const personRect = person.getBoundingClientRect();
    const doorRect = door.getBoundingClientRect();
    return !(personRect.right < doorRect.left || personRect.left > doorRect.right || personRect.bottom < doorRect.top || personRect.top > doorRect.bottom);

    let modalCasa1 = document.getElementById("modal-casa1")
    modalCasa1.addEventListener("click", function () {
        modalCasa1.classList("modalGameActive")
    })
}

function resetPosition() {
    position = { top: 0, left: 0 };
    updatePosition();
    anuncioExibido = false;
    keysPressed['w'] = keysPressed['W'] = keysPressed['s'] = keysPressed['S'] = keysPressed['a'] = keysPressed['A'] = keysPressed['d'] = keysPressed['D'] = false;
} 
