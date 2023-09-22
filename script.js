//alert("hi");

/*
let a = 5, b = 2; //let can cange
const myName = "hi"; //const cannot change
//"var" also exist but didnt used

console.log(a+b);
console.log(a/b);
console.log(a*b);

console.log("hello "+myName);
*/
/*
const amIFat = true; //->defined
let someting; //->undefined(type)
console.log(someting, amIFat);
*/
/*
const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri'];
console.log(daysOfWeek);

//Add one more day to the array
daysOfWeek.push("sat");
console.log(daysOfWeek);
*/
/*
const player = {  //object
    name: "nico", //do not use equal
    points: 10, //use comma
    fat: true,
};

console.log(player);
player.fat = false;
console.log(player); //fat->false

console.log(player.name); //nico
console.log(player['name']); //nico

player.lastName = "potato"; //add element
console.log(player);
*/
/*
function sayHello(name, age){
    console.log("Hello my name is "+name+" and I'm"+age);
}

sayHello('nico', 10);

function plus(a, b){
    console.log(a+b);
}
plus(2,3);

function divide(a, b){
    console.log(a/b);
}
divide(98, 20);

const player = {
    name: 'nico',
    Hello: function(){
        console.log("hello");
    },
}
console.log(player.name);
player.Hello();
*/
/*
const cal = {
    add: function(a,b){
        console.log(a+b);
    },
    min: function(a,b){
        console.log(a-b);
    },
    div: function(a,b){
        console.log(a/b);
    },
    powerof: function(a,b){
        console.log(a**b);
    },
}
cal.add(1,2);
cal.min(1,2);
cal.div(1,2);
cal.powerof(2,2);
*/
/*
const age = 96;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner + 2; //98
    return "hello";
}

const KrAge = calculateKrAge(age);

console.log(KrAge); //hello
*/
/*
const age = prompt("How old are you?"); //stop running javascript waiting for us?
//parseInt(age);
console.log(typeof parseInt(age));
*/

const age = parseInt(prompt("How old are you?"));

//console.log(isNaN(age));

if(isNaN(age) || age<0){
    console.log("Please write a number");
}
else if(age<18){
    console.log("You are too young");
}
else if(age>=18 && age<=50){
    console.log("You can drink");
}
else if(age>50 && age<=80){
    console.log("You shoud exercise");
}
else if(age === 100){
    console.log("wow you are wise");
}
else if(age>80){
    console.log("You can do whatever you want");
}
