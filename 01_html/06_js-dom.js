const colors = ['red', 'green', 'blue', 'yellow', 'white', 'black', 'purple']

let movingBlockPositionX = 0

//при загрузке страницы
window.onload = function(event) {
    console.log('page loaded')
        //листенер на нажатие любой кнопки клавиатуры
    document.addEventListener('keydown', handleKeyBoardEvent)
}

function increaseCounter() {
    const e = document.getElementById('counter')
    console.log(e)
    newCount = parseInt(e.textContent) + 1
    e.textContent = newCount
}

function changeColors() {
    const e = document.getElementsByClassName('colored')
    for (let i = 0; i < e.length; i++) {
        e[i].style.backgroundColor = getArrayRandomElement(colors)
    }
}

function handleKeyBoardEvent(event) {
    if (event.key == 'ArrowLeft') {
        moveBlockLeft()
    }
    if (event.key == 'ArrowRight') {
        moveBlockRight()
    }
}

//перемещение блока по кнопке
function moveBlockLeft() {
    const e = document.getElementById('moving-block')
    movingBlockPositionX -= 10
    console.log(movingBlockPositionX)
    e.style.left = movingBlockPositionX
}

function moveBlockRight() {
    const e = document.getElementById('moving-block')
    movingBlockPositionX += 10
    console.log(movingBlockPositionX)
    e.style.left = movingBlockPositionX
}

function getArrayRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)]
}
