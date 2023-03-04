let input = document.getElementById("input");
let button = document.getElementById("button");
let result ='<h2>Uhh you need to click the "Calculate" for it to work</h2>';

document.getElementById("text").innerHTML = result;

input.addEventListener("input", function () {
  let value = this.value;
  let zNo = /^[01]*$/;
  if (!zNo.test(value)) {
    this.value = value.replace(/[^01]/g, "");
  }
});

button.addEventListener("click", function () {
  let binaryInput = input.value;
  let decimalOutput = parseInt(binaryInput, 2);
  result = "<h2>The decimal value of " + binaryInput + " is " + decimalOutput + "</h2>";

  document.getElementById("text").innerHTML = result;
});
