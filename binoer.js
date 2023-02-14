let button = document.getElementById("button");

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
});