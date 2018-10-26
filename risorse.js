var tess = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var cambio = 0;
/*var success = new Audio('success.wav');*/

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
  tess[1]+=1;
  tess[2]+=1;
  tess[3]+=2;
  tess[4]+=1;
  tess[5]+=1;
  tess[6]+=1;
  tess[7]+=1;
  v=tess[ind];
  document.getElementById("legno3").innerHTML = tess[0];
  document.getElementById("argilla1").innerHTML = tess[1];
  document.getElementById("canna").innerHTML = tess[2];
  document.getElementById("legno2").innerHTML = tess[3];
  document.getElementById("argilla2").innerHTML = tess[4];
  document.getElementById("cibo").innerHTML = tess[5];  
  document.getElementById("pietra1").innerHTML = tess[6];
  document.getElementById("pietra2").innerHTML = tess[7];  
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
