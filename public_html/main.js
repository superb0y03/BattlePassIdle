/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var number = 0;
var tickspeed = 1000;
var gamebody = document.getElementById("gamebody");
var numberCount = document.createElement("p");
var ontick = [];

function testfunction() {return false;}
function addButton(button) {
    newButton = document.createElement("button");
    newButton.innerHTML = button.name;
    newButton.onclick = testfunction; //function () { buyEffect(button.effect, button.cost); };
    console.log(newButton);
    newButton.id = button.name;
    gamebody.appendChild(newButton);
}
function start() {
    gamebody.appendChild(numberCount);
    addToTickLog(function() {number++;});
    var persist = setInterval(tick, tickspeed);
}
function tick() {
    console.log(ontick);
    ontick.forEach(element => {if(element !== undefined) element();});
    basePass.unlocks.forEach(unlock => {
        console.log(unlock.reqs());
        if(unlock.reqs() && !unlock.isPrest) {
            unlock.effect();
        }
        //console.log(unlock);
    });
    numberCount.innerHTML = "Number: " + number;
    //alert("tick");
}
function buyEffect(effect, cost) {
    if(number >= cost) {
        number -= cost;
        effect();
    }
}
function addToTickLog(action) {
    ontick.push(action);
}

