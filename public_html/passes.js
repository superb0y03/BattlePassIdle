/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var basePass = {
    "name":"base pass",
    "unlocks":[{
        "id":1,
        "reqs":function() { return number===5 },
        "isPrest":false,
        "effect":function() { gen1.unlocked = true; console.log("gen1 unlocked"); addButton(gen1)}
    }]
};
