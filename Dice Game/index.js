 function myfun() {
     var ranN = Math.floor(Math.random() * 6) + 1;
     var ranN1 = Math.floor(Math.random() * 6) + 1;
     document.querySelector("#first").src = ("dice" + ranN + ".png")
     document.querySelector("#second").src = ("dice" + ranN1 + ".png")

     if (ranN > ranN1) {
         document.querySelector("h1").innerText = "Player 1 Won"
     } else if (ranN < ranN1) {
         document.querySelector("h1").innerText = "Player 2 Won"
     } else {
         document.querySelector("h1").innerText = "Draw"
     }




 }