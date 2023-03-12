let breakOut = document.getElementById("break");
let dip = document.getElementById("dip");

breakOut.addEventListener("click", function guilty (){
  document.getElementById("pic").innerHTML = '<img src="../../../pics/secret/Doggosaurus.png" alt="doggo" height="25%" width="25%">';
  document.getElementById("hey").innerHTML = "HEY! Where do you think you're going?!";
  document.getElementById("dip").innerHTML = "dip";
});

dip.addEventListener("click", function dip () {
  location.href = "../escape.html";
});