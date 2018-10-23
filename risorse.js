var tess = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
/*var success = new Audio('success.wav');*/

function myfunc(id,i,ind) {
  if (tess[6] == 0)
    {
    tess[ind]=0;
    v=tess[ind];
    document.getElementById(id).innerHTML = v;
    var suona = new Audio('togli.mp3');
    suona.play();
    }
  else
    {
    tess[ind]+=1;
    document.getElementById(id).innerHTML = v;
    var suona = new Audio('success.wav');
    suona.play();
    }
}

function myfunc2(id,i,ind) {
  tess[0]+=3;
  tess[1]+=1;
  tess[2]+=1;
  tess[3]+=2;
  tess[4]+=1;
  tess[5]+=1;
  v=tess[ind];
  document.getElementById("legno3").innerHTML = tess[0];
  document.getElementById("argilla1").innerHTML = tess[1];
  document.getElementById("canna").innerHTML = tess[2];
  document.getElementById("legno2").innerHTML = tess[3];
  document.getElementById("argilla1").innerHTML = tess[4];
  document.getElementById("cibo").innerHTML = tess[5];  
  var suona = new Audio('success.wav');
  suona.play();
}

function myfunc3(div) {
  if ( tess[6] == 0 )
    {
    tess[6] == 1;
    div.className = "on";
    }
  else
    {
    tess[6] == 0;
    div.className = "off";
    }
  var suona = new Audio('success.wav');
  suona.play();
}
