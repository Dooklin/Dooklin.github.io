let output = document.getElementById("countOutput");
let plus1 = document.getElementById("countButton");

let onepersec = document.getElementById("onesec");
let tenpersec = document.getElementById("tensec");
let fifpersec = document.getElementById("fifsec");

let onecount = 0;
let tencount = 0;
let fifcount = 0;

let count = 0;

plus1.addEventListener("click", function(){
  count++;
  output.innerHTML = count;
})

function add1(){
  count++;
  output.innerHTML = count;
}

function add10(){
  count += 10;
  output.innerHTML = count;
}

function add50(){
  count += 50;
  output.innerHTML = count;
}

onepersec.addEventListener("click", function(){
  if(count >= 10){
    count -= 10;
    add1();
    setInterval(add1, 1000);
    onecount++;
    onepersec.innerHTML = "+1 every second  (10) [" + onecount + "]";
  }
})

tenpersec.addEventListener("click", function(){
  if(count >= 150){
    count -= 150;
    add10();
    setInterval(add10, 1000);
    tencount++;
    tenpersec.innerHTML = "+10 every second (150) [" + tencount + "]";
  }
})

fifpersec.addEventListener("click", function(){
  if(count >= 750){
    count -= 750;
    add50();
    setInterval(add50, 1000);
    fifcount++;
    fifpersec.innerHTML = "+50 every second (750) [" + fifcount + "]";
  }
})

//so that +1 every second... is being displayed before being pressed
onepersec.innerHTML = "+1 every second  (10) [" + onecount + "]";
tenpersec.innerHTML = "+10 every second (150) [" + tencount + "]";
fifpersec.innerHTML = "+50 every second (1000) [" + fifcount + "]";