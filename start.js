const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = "#bc8452";
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = "#805434";
    });
});

let binary = document.getElementById("binary");
let decimal = document.getElementById("decimal");
let snake = document.getElementById("snake");

binary.addEventListener("click", function() {
    location.href = "/static/binoer/binoer.html";
})

decimal.addEventListener("click", function() {
    location.href = "/static/decimoel/decimoel.html";
})

snake.addEventListener("click", function() {
    location.href = "/static/snake/snake.html"
})