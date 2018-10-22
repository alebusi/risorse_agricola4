var tess = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
/*var success = new Audio('success.wav');*/

function myfunc(id,i,ind) {
  tess[ind]=0;
  v=tess[ind];
  document.getElementById(id).innerHTML = v;
  if (i == 1) 
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
  if (i == 1) 
    var suona2 = new Audio('success.wav');
    suona2.play();
    }
  }
