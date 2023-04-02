let handle = document.getElementById("handle");
let yourself = document.getElementById("yourself");

handle.addEventListener("click", function handle () {
  location.href = "free.html";
});

yourself.addEventListener("click", function yourself (){
  document.getElementById("huh").innerHTML = "why wouldn't you trust saul? <br> Are you sure?";
  document.getElementById("sure").innerHTML = "<h3>Yes, I'm sure!</h3>";
});