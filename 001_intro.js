"use strict";
/* alert('«Я JavaScript!».');

let user = 'John'
    , age = 25
    , message = 'Hello2';

alert(message);
alert(age*2);

const myBday = '20.12.1993'; 
alert(myBday);

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
let color = COLOR_RED;
alert(COLOR_RED);

    //task001
let admin
    , name
    , secondName;

name = 'John';
admin = name;
alert(admin);

let myPrivatePlanet;
let currentUserName; 

let value = true;
alert(typeof value); // boolean

value = Number(value); // теперь value это строка "true"
alert(typeof value); // number


alert("" + 1 + 0 ); // 10
alert("1 + 0"); // 1 + 0
alert(1 + 0); // 1

alert(true + false); //1
*/


console.log("answ1:", true + false);  // converts to 1 / 0 -> 1+0 = 1;
console.log("answ2:", "" + 1 + 0); // "" + 1 -> "1"; "1"+ 0 = "10"
console.log("answ3:", "2" + "3");
console.log("answ4:", "" - 1 + 0); 
console.log("answ5:", 4 + 5 + "px"); // concatenation 
console.log("answ6:", "4px" - 2); // ошибка чтения числа 'px'

let answ1
    ,answ1updated
    ,answ2
    ,answ3
    ,answ4
    ,answ5
    ,answ6
    ,answ7;

answ1 = true + false;
answ1updated = String(answ1);
answ7 = 0 + 0;

console.log(typeof answ1);
console.log(typeof answ1updated);
console.log(answ1updated);
console.log(answ1 + answ1updated);
console.log(typeof `${0 + 0}`);
console.log(9 % 2); 
console.log(9 / 2);
console.log(2 ** 2);

let counter = 2
    , counter2
    , counter3 = 3;
++counter;
console.log(counter + counter3);




