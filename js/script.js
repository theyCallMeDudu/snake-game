let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // renderiza o desenho que aparecera no canva
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direcion = "right";

// funcao que cria o canva
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); // desenha o quadrado onde acontece o jogo
}

// funcao que cria a cobrinha
function criarCobrinha(){
    for(var i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// funcao que inicia o jogo
function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // condicionais para o movimento da cobrinha
    if (direction == "right") {
        snakeX += box;
    }

    if (direction == "left") {
        snakeX -= box;
    }

    if (direction == "up") {
        snakeY -= box;
    }

    if (direction == "down") {
        snakeY += box;
    }

    // simula o movimento da cobrinha
    // conforme ela anda, o array cresce para um lado
    // e diminui do outro
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);
