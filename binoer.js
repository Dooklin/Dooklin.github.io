let button = document.getElementById("button");
let secretButton = document.getElementById("secret");
let count = 0;

button.addEventListener("click", function () {
  let decimal = parseInt(document.getElementById("input").value);
  let result;

  if (decimal === 6969) {
    console.log("Hello Dear");
    return;
  }

  if (decimal === 420) {
    result = '<img src="pics/secret.png">';
  } else {
    let binary = decimal.toString(2);
    result = "<h2> In Binary: " + binary + "</h2>";
  }

  document.getElementById("text").innerHTML = result;

  if (window.navigator.userAgent.indexOf("Edg") > -1) {
    console.log("Stop using Edge");
  }
});

secretButton.addEventListener("click", function () {
  count++;

  if (count === 5) {
    location.href = "otherStuff/secret.html";
  }
});
