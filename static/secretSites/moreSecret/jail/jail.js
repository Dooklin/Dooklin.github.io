let guilty = document.getElementById("Guilty");
let notguilty = document.getElementById("NotGuilty");
let missClick = document.getElementById("missClick");

guilty.addEventListener("click", function guilty (){
  document.getElementById("pic").innerHTML = '<img src="../../../pics/secret/Doggosaurus.png" alt="doggo" height="25%" width="25%">';
  document.getElementById("withHim").innerHTML = "Go with him, he'll bring you to your cell";
  document.getElementById("cell").innerHTML = "The Cell";
});

notguilty.addEventListener("click", function notguilty() {
  document.getElementById("pic").innerHTML = '<img src="../../../pics/secret/Doggosaurus.png" alt="doggo" height="25%" width="25%">';
  document.getElementById("withHim").innerHTML = "What!? But the evidence is undeniable";
  document.getElementById("saul").innerHTML = "<h1> TIME TO CALL SAUL </h1>";
});

missClick.addEventListener("click", function missClick(){
  document.getElementById("pic").innerHTML = '<img src="../../../pics/secret/Doggosaurus.png" alt="doggo" height="25%" width="25%">';
  document.getElementById("withHim").innerHTML = "haha... Nice try  It's either Guilty or Not";
});