let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // renderiza o desenho que aparecera no canva
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

// funcao que cria a comida
function criarComida() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

// "ouve" o evento de pressionar uma tecla
// e chama a função update passando como argumento
// a tecla pressionada
document.addEventListener('keydown', update);

// funcao que atualiza o movimento da cobrinha
function update(event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

// funcao que inicia o jogo
function iniciarJogo(){
    
    /* 
       se a cabeca (snake[0]) for maior que 15,
       ou seja, se ela ultrapassa o limite da tela,
       ela aparece do outro lado da tela, ou, 0
    */

    // limite direita
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    // limite esquerda
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    // limite baixo
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    // limite cima
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();
    criarComida();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // condicionais para o movimento da cobrinha
    if (direction == "right") snakeX += box;
        
    if (direction == "left") snakeX -= box;
        
    if (direction == "up") snakeY -= box;
        
    if (direction == "down") snakeY += box;
    

    // verificacao de crescimento da cobrinha
    if(snakeX != food.x || snakeY != food.y){
        /* snake.pop()
           simula o movimento da cobrinha
           conforme ela anda, o array cresce para um lado
           e diminui do outro
        */
        snake.pop();
    } else {
        // se a cobrinha comeu a comida,
        // a cobrinha cresce de tamanho
        // e a comida aparecera em outro lugar
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    // "nova cabeca", porque ela cresce de tamanho
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);
