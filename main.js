let order = []
let clickedOrder = []
let socre = 0

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickedOrder = []

    for(let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + i)
    }
}

let lightColor = (element, number) =>{
    const time = time * 500
    setTimeout( ( ) => {
        element.classList.add('selected');
    }, tempo);
    setTimeout(() =>{
        element.classList.remove('selected')
    } )

}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order){
            lose()
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação ${score}\nVocê acertou! Iniciando próximo nível`)
        nextLevel();
    }

}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    elementColor(color).classList.add('selected')

    setTimetout( () => {
        elementColor(color).classList.remove('selected')
    }) 

    checkOrder();
}

let createColorElement = (color) => {
    if(color == 0){
        return green
    }else if (color == 1){
        return red
    }else if (color == 2){
        return yellow
    }else if (color == 3){
        return blue
    }
}

let nextLevel = () => {
    score++
    shuffleOrder();

}

let gameOver = () =>{
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo\nClique em Ok para iniciar um novo jogo`)
    order = []
    clickedOrder = []

    playGame()
}

let playGame = () => {
    alert('Bem vindo ao Genesis! Iniciando um novo jogo!')
    score = 0

    nextLevel()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
blue.onclick = () => click(2)
yellow.onclick = () => click(3)

playGame()