"use strict";
$(document).ready(function (){
    function rng() {
        let num = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        return num;
    }

    let roll = $("#roll");

    let diceArr = [$("#d1.fas"),$("#d2.fas"), $("#d3.fas"),$("#d4.fas"),$("#d5.fas"),$("#d6.fas")]


function diceRoller(die,num) {
    console.log(num);
    switch (num) {
        case 1:
            die.addClass("fa-dice-one");
            ;

            break;
        case 2:
            die.addClass("fa-dice-two");

            break;
        case 3:
            die.addClass("fa-dice-three");

            break;
        case 4:
            die.addClass("fa-dice-four");

            break;
        case 5:
            die.addClass("fa-dice-five")
            break;
        case 6:
            die.addClass("fa-dice-six");
            break;
        default:
            break;
    }
}
 roll.click(function (){
     for(let i =0; i<diceArr.length; i++){
         diceRoller(diceArr[i],i);
         diceRoller(diceArr[i],rng());
     }
 });
});




