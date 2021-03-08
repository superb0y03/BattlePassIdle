/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var gen1 = {
    "name":"Generator 1",
    "effect":addToTickLog(increaseNumber()),
    "count":0,
    "baseCost":10,
    "unlocked":false
};
function increaseNumber() {
    number++;
}