var tess = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var cambio = 0;
var secondi = 0;
/*var success = new Audio('success.wav');*/

function init() {
        e = document.getElementById("tempo");
        setInterval(function() { e.innerHTML = ++secondi; }, 1000);
        }
window.onload = init;

function myfunc(id,i,ind) {
  if (cambio == 0)
    {
    document.getElementById(id).className = "risorsa";
    tess[ind]=0;
    document.getElementById(id).innerHTML = tess[ind];
    var suona = new Audio('togli.mp3');
    suona.play();
    }
  else if (cambio == 1)
    {
    tess[ind]+=1;
    document.getElementById(id).innerHTML = tess[ind];
    var suona = new Audio('success.wav');
    suona.play();
    }
  else
    {
    document.getElementById(id).className = "risorsa";
    tess[ind]=0;
    document.getElementById(id).innerHTML = tess[ind];
    }
}

function myfunc2(id,i,ind) {
  tess[0]+=3;
  tess[1]+=2;
  tess[2]+=1;
  tess[3]+=1;
  tess[4]+=1;
  tess[5]+=2;
  tess[6]+=1;
  tess[7]+=1;
  tess[8]+=1;
  tess[9]+=1;
  tess[10]+=1;
  tess[11]+=1;
  tess[12]+=1;
  v=tess[ind];
  document.getElementById("legno3").innerHTML = tess[0];
  document.getElementById("argilla2").innerHTML = tess[1];
  document.getElementById("pietra1").innerHTML = tess[2];
  document.getElementById("cibo").innerHTML = tess[3];
  document.getElementById("canna").innerHTML = tess[4];
  document.getElementById("legno2").innerHTML = tess[5];  
  document.getElementById("argilla1").innerHTML = tess[6];
  document.getElementById("pietra2").innerHTML = tess[7];
  document.getElementById("cibo2").innerHTML = tess[8];
  document.getElementById("legno1").innerHTML = tess[9];      
  document.getElementById("pecora").innerHTML = tess[10];
  document.getElementById("cinghiale").innerHTML = tess[11];
  document.getElementById("bestiame").innerHTML = tess[12];
  secondi=0;
  var suona = new Audio('success.wav');
  suona.play();
}

function myfunc3(div) {
  cambio+=1;
  if ( cambio > 1 )
    {
    cambio = 0;
    }
  switch(cambio) {
    case 0:
        div.className = "zero";
        break;
    case 1:
        div.className = "uno";
        break;
    case 2:
        div.className = "due";
        break;
  }
  var suona = new Audio('success.wav');
  suona.play();
}
