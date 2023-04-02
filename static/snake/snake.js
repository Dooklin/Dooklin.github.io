//variable, dass man den canvas im html als objekt names canvas in js hat
let canvas = document.getElementById('canvas');
//ctx = context, das es 2d ist (2d unbedingt kleinschreiben)
let ctx = canvas.getContext('2d');
//die reihen
let rows = 20;
//die spalten
let cols = 20;
//die schlange und ihre startpos in json
let snake = [{
    x: 19,
    y: 3
}];
//variable für das essen
let food;
//variable für die breite der Zellen
let cellWidth = canvas.width / cols;
//variable für die höhe der Zellen
let cellHeight = canvas.height / rows;
//die startposition (das die snake zuerst nach links geht)
let direction = 'LEFT';
// ob das essen bereits bereit ist ein neues zu spawnen als bool (t, f)
let foodCollected = false;
// variable für den highscore
let HighScore = 0;
// variable für den aktuellen score
let CurrentScore = 0;
//variable für die Anzahl der tode
let deaths = 1;
//funktion namens "placeFood" wird ausgeführt
placeFood();

//setzt wie schnell das Spiel funktioniert (50 sehr schnell, 200 normal)
setInterval(gameLoop, 200);
document.addEventListener('keydown', keyDown);

//funktion namens "draw" wird ausgeführt
draw();

//funktion namens draw wird erstellt
function draw() {
    //hintergrund als schwarz
    ctx.fillStyle = 'black';
    //die "snake" als weiß
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';

    //das die snake wächst
    snake.forEach(part => add(part.x, part.y));

    //das "essen" als rot
    ctx.fillStyle = 'red';
    //fügt das essen ein
    add(food.x, food.y);


    requestAnimationFrame(draw);
}

//eine funktion für, wenn der spieler verliert
function testGameOver() {
    //variablen für die snake
    let firstPart = snake[0];
    let otherParts = snake.slice(1);

    let duplicatePart = otherParts.find(part => part.x == firstPart.x && part.y == firstPart.y);

    // Schlange läuft gegen die Wand
    if (snake[0].x < 0 ||
        snake[0].x > cols - 1 ||
        snake[0].y < 0 ||
        snake[0].y > rows - 1 ||
        duplicatePart
    ) {
        // hier von mir, wenn die schlange stirbt, wird ein Bild im div erscheinen (unter dem spiel) mit einem death counter
        document.getElementById("schade").innerHTML ='<h2>' + deaths++ + ' death/s 😂</h2>';
        //kleines EasterEgg (ab 100 tode wird 💀 ausgegeben)
        if (deaths > 100) {
            document.getElementById("schade").innerHTML += '💀'
        }
        //neues essen wird gesetzt mit einer funktion
        placeFood();
        //schlange wird zurückgesetzt
        snake = [{
            x: 19,
            y: 3
        }];
        //schlange geht nach links
        direction = 'LEFT';
        //if statement, dass den Highscore setzt und ausgibt
        if (CurrentScore > HighScore) {
            HighScore = CurrentScore;
            document.getElementById("HighScore").innerHTML = "HighScore: " + HighScore;
        }
        //CurrentScore wieder auf null setzen
        CurrentScore = 0;
        //ausgeben
        document.getElementById("CurrentScore").innerHTML = "Current Score:";
    }
}

//funktion für die essensplatzierung
function placeFood() {
    //zufällige position mit math.random
    let randomX = Math.floor(Math.random() * cols);
    let randomY = Math.floor(Math.random() * rows);
    //variablen werden mit json zum essen eingefügt
    food = {
        x: randomX,
        y: randomY
    };
}
/* eine funktions namens "add", die mit der variable ctx (context)
    rechnungen macht mit der breite/höhe der zellen*/
function add(x, y) {
    ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth - 1, cellHeight - 1);
}
/*funktion namens "shiftSnake", die in einer schleife verschiedenste 
    konstanten von der schlage beinhaltet*/
function shiftSnake() {
    for (let i = snake.length - 1; i > 0; i--) {
        const part = snake[i];
        const lastPart = snake[i - 1];
        part.x = lastPart.x;
        part.y = lastPart.y;
    }
}

/*funktion namens "gameLoop" die zuerst schaut ob das spiel bereits geendet hat.
und dann sieht, ob die schlange ein essen gegessen hat, und es dazu zählt*/
function gameLoop() {
    testGameOver();
    if (foodCollected) {
        snake = [{
            x: snake[0].x,
            y: snake[0].y
        }, ...snake];
        /*hier wird die varieble wieder auf false gesetzt, sodass das spiel nicht denkt,
        dass es ständig ein essen dazuzählt*/
        foodCollected = false;
        //CurrentScore um 1 erhöhen
        CurrentScore++;
        //ausgeben
        document.getElementById("CurrentScore").innerHTML = "Current Score: " + CurrentScore;
    }
    //die funktion shiftSnake wird ausgeführt
    shiftSnake();
    //viele if statements, die die snake bewegen entweder up down...
    if (direction == 'LEFT') {
        snake[0].x--;
    }

    if (direction == 'RIGHT') {
        snake[0].x++;
    }

    if (direction == 'UP') {
        snake[0].y--;
    }

    if (direction == 'DOWN') {
        snake[0].y++;
    }
    //nachdem essen weg ist, ein neues mit placeFood spawnen
    if (snake[0].x == food.x &&
        snake[0].y == food.y) {
        foodCollected = true;
        //funktion placeFood wird ausgeführt
        placeFood();
    }

}
// funktion die checkt, ob man die pfeiltasten gedrückt hat, und dann die entsprechende
// richtung einnimmt
function keyDown(e) {
    if (e.keyCode == 37) {
        direction = 'LEFT';
    }
    if (e.keyCode == 38) {
        direction = 'UP';
    }
    if (e.keyCode == 39) {
        direction = 'RIGHT';
    }
    if (e.keyCode == 40) {
        direction = 'DOWN';
    }
}