"use strict";
//<div class="col-2">
//                     <h1>
//                         <i id="d1" class="fas white dice"></i>
//                     </h1>
//                 </div>

function renderDice() {
    var html = '<div class="col-2>';
    html += '<h1>';
    html += '<i class = "die"></i>';
    html += '</h1>';
    html += '</div>';
    return html;
}


$(document).ready(function (){
    function rng() {
        let num = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        return num;
    }

    let roll = $("#roll");

    let diceArr = [];


function diceRoller(die,num) {
    let icon = $(".die");
    if (icon.has(".die")) {
        switch (num) {
            case 1:
                icon.addClass("fas white dice fa-dice-one");
                ;

                break;
            case 2:
                icon.addClass("fas white dice fa-dice-two");

                break;
            case 3:
                icon.addClass("fas white dice fa-dice-three");

                break;
            case 4:
                icon.addClass("fas white dice fa-dice-four");

                break;
            case 5:
                icon.addClass("fas white dice fa-dice-five")
                break;
            case 6:
                icon.addClass("fas white dice fa-dice-six");
                break;
            default:
                break;
        }
    }
    console.log(num,die);
    diceDiv.append(die);
}



 roll.click(function (){
     for(let i =0; i<6; i++){

      diceRoller(renderDice(),i);
     }
 });

let diceDiv = $("#dice");
diceArr.forEach(function(elem) {
    console.log(elem);
})
// diceDiv.innerHTML = ;

});




