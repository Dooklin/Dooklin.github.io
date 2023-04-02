var button = document.getElementById('button');
var count = 0;

button.addEventListener('click', function() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  var x = Math.floor(Math.random() * (width - button.offsetWidth));
  var y = Math.floor(Math.random() * (height - button.offsetHeight));

  button.style.position = 'absolute';
  button.style.left = x + 'px';
  button.style.top = y + 'px';

  count++;
  if (count === 1) {
    button.textContent = "yo stop it";
  } else if (count === 2) {
    button.textContent = "Bro stop it";
  } else if (count === 3){
    button.textContent = "Cant you see im movin yo";
  } else if (count === 4){
    button.textContent = "That means i dont like being clicked";
  } else if (count === 5){
    button.textContent = "SOMEBODY HELPPP";
  } else if (count === 6){
    button.textContent = "Hell nah just stop it yo";
  } else if (count === 7){
    button.textContent = "FINE... heres the secret yo,";
  } else if (count === 8){
    button.textContent = "take it";
  } else if (count === 9){
    location.href = "moreSecret/persistance.html";
  }
});