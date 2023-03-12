let button = document.getElementById("button");
let secretButton = document.getElementById("secret");
let count = 0;
let result = '<h2>Uhh you need to click the "Calculate" for it to work</h2>';

document.getElementById("text").innerHTML = result;

button.addEventListener("click", function () {
  let decimalInput = parseInt(document.getElementById("input").value);

  if (decimalInput === 6969) {
    console.log("Hello Dear");
    return;
  }

  if (decimalInput === 420) {
    result = '<img src="static/pics/binoer/secret.png">';
  } else {
    let binaryOutput = decimalInput.toString(2);
    result = "<h2>The binary value of " + decimalInput + " is " + binaryOutput + "</h2>";
  }

  document.getElementById("text").innerHTML = result;

  if (window.navigator.userAgent.indexOf("Edg") > -1) {
    console.log("Stop using Edge");
  }
});

secretButton.addEventListener("click", function () {
  count++;

  if (count === 5) {
    location.href = "static/secretSites/secret.html";
  }
});

function Jail(){
  location.href = "static/secretSites/moreSecret/jail/jail.html"
};

function DogNCat(){
  location.href = "static/otherSites/DogNCat.html"
};