let output = document.getElementById("countOutput");
let plus1 = document.getElementById("countButton");

let onepersec = document.getElementById("onesec");
let tenpersec = document.getElementById("tensec");
let fifpersec = document.getElementById("fifsec");
let hunpersec = document.getElementById("hunsec");
let fhunpersec = document.getElementById("fhunsec");

let randompersec = document.getElementById("random");
let randomNumba = Math.ceil(Math.random()* 4000 + 1000);

let onecount = 0;
let tencount = 0;
let fifcount = 0;
let huncount = 0;
let fhuncount = 0;

let randomcount = 0;


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

function add100(){
  count += 100;
  output.innerHTML = count;
}

function add500(){
  count += 500;
  output.innerHTML = count;
}

function addRandom(){
  count += randomNumba;
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

hunpersec.addEventListener("click", function(){
  if(count >= 2000){
    count -= 2000;
    add100();
    setInterval(add100, 1000);
    huncount++;
    hunpersec.innerHTML = "+100 every second (2000) [" + huncount + "]";
  }
})

fhunpersec.addEventListener("click", function(){
  if(count >= 7500){
    count -= 7500;
    add500();
    setInterval(add500, 1000);
    fhuncount++;
    fhunpersec.innerHTML = "+500 every second (7500) [" + fhuncount + "]";
  }
})

randompersec.addEventListener("click", function(){
  if(count >= 50000){
    count -= 50000;
    addRandom();
    setInterval(addRandom, 1000);
    randomcount++;
    randompersec.innerHTML = "+ " + randomNumba + " every second (50000) [" + randomcount + "]";
  }
})

//so that +1 every second... is being displayed before being pressed
onepersec.innerHTML = "+1 every second  (10) [" + onecount + "]";
tenpersec.innerHTML = "+10 every second (150) [" + tencount + "]";
fifpersec.innerHTML = "+50 every second (750) [" + fifcount + "]";
hunpersec.innerHTML = "+100 every second (2000) [" + huncount + "]";
fhunpersec.innerHTML = "+500 every second (7500) [" + fhuncount + "]";
randompersec.innerHTML = "+??? every second (50000) [" + randomcount + "]";
