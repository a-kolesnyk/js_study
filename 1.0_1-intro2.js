//Marein_Haverbeke_Eloquent_Javascript

/*
let total =0, count =1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);

//<!-- add numbers from 1 to 10 together and print out the result 
//1 + 2 + ... +10 = 55-->

*/

//#Глава 2 структура программы

let caught = 5 * 5; // let - определение привязки
console.log(caught * 2); //вивод значения 

caught = 10;
console.log(caught);
console.log(caught == null);
console.log(typeof caught);

let debt = 200;
debt = debt - 25;
console.log(debt, '[p42]');

let demo;
console.log(demo, '[p43]' );

/*
var a;
a = 'Hello';
console.log(a);

a = 20;
console.log(a);

let a = 15;
console.log(a); // ошибка: 'а' уже задекларированая переменная
*/
 
const b = 100;
let c = b + 200;
console.log(c); 1
c = b;
console.log(c);
 // b = 90; // TypeError: Assignment to constant variable.
c == b;
console.log(c);


// prompt("Enter pass"); // not defined; в любом случае 'promt' 
//не используеться

console.log(Math.random(1,200)); // как получить свойства  ?
console.log(Math.max(2,3));
console.log(Math.min(2,3));

//# Цикли while , do 
let number = 0;
while (number <= 12){
    console.log(number);
    number = number + 2;
}

/*  prompt cmnd works just in browser
let yourName;
do {
  yourName = prompt("Who are u?"); //pop-up
} while (!yourName);
console.log(yourName);
*/

//# Циклы for

for (let number = 0; number <= 12; number = number +2) {
    console.log(number);
}


let result = 1;
for (let counter = 0; counter < 10; counter + 1) {
    result = result * 2;
}
    console.log(result);
