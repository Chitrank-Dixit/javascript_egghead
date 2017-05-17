// javascript array function style

var createGreeting = function(message, name){
  return message + name
};

// new ES6 code
var arrowGreeting = (message, name) => {
  return message + name
};

// also some changes
var arrowGreeting = (message, name) => message + name ;

// also some more shortcuts
var arrowGreeting = message => message;
var squared = x => x*x;

// arrows in the ECMA script 6 2015
var deliveryBoy ={
  name: "John",

  handleMessage: function (message,handler){
  handler(message);
  },

  receive: function () {
    // one liner
    this.handleMessage("Hello, ", message => console.log(message + this.name));
  }
};

deliveryBoy.receive();


// ecma script 6 let keyword

//var message = "hi";
//
//{
//  var message = "world";
//}
//// we will log the message world instead of hii, cause the second block gets run
//console.log(message);



// for proper scoping in the javascript we can use the let keyword
let message = "hi";

{
  let message = "world";
}

console.log(message);


// some more stuff

var fs = [];

// while using var we are pushing the same value in the fs array

for(var i=0;i<10;i++){
  fs.push(function(){
    console.log(i);
  })
}


fs.forEach(function (f){
  f();
});

// You'd think that we'd get zero through 9,
// but in fact when we run this we'll get 10's, because this i is that same i being used and reassigned each time.


// If I use let instead of var now, and rerun this, you'll see that I get zero through 9, and it stops before getting to 10,
// because this is creating a new i each time you go through the for loop.
for(let i=0;i<10;i++){
  fs.push(function(){
    console.log(i);
  })
}


fs.forEach(function (f){
  f();
});


//
function varFunc(){
  var previous = 0;
  var current = 1;
  var i;
  var temp;

  for(i = 0; i < 10; i+=1){
    temp = previous;
    previous = current;
    current = temp + current;
  }
  console.log(current);
}

function letFunc(){
  let previous = 0;
  let current = 1;

  for(let i = 0; i < 10; i+=1){
    let temp = previous;
    previous = current;
    current = temp + current;
  }

  console.log(current);
}

varFunc();
letFunc();

// default value for the funtion paramters in es 6

// the below function will throw the undefined , undefined error
// because nothing was paased into greeting and name
function greet(greeting, name) {
  console.log(greeting + ' ' +  name);
}

greet();


function greet(greeting, name="John") {
  console.log(greeting + ' ' +  name);
}

greet("Hello");
greet("Hello", "Bill");


// but what if we set default function to the arguments

function receive(complete) {
  complete()
}

receive(function () {
  console.log("complete");
});

// assigning default argument for the function

function receive(complete = function () {
                    console.log("complete");
                  }) {
  complete()
}

receive();


function receive(complete = () => console.log("complete")) {
  complete()
}

receive();


let receive_new = (complete = ()=> console.log("complete"))=> complete()


receive_new();


// constant declaration in es 6
// previously in the javascript for making constant variable
// we usually keep the variable name to be all in caps

var VALUE = 'hello world';
VALUE = 'foo bar';
console.log('value: ', VALUE);


// now in ecma script 6 we have a const keyword for this

const VALUE1 = 'hello world';
//VALUE = 'foo bar';
console.log('value: ', VALUE1);

const DICT = {};
DICT.name = "Chitrank";
DICT["age-my"] = 26;
console.log(DICT);

// const can be used to keep track of the API credentials and some of the variable that do not change very often

// const keyword outside the block takes care of the local and global scope


// The below block would throw the reference error says foo is not defined
if(true) {
  const foo = 'bar';
  console.log('foo: ', foo);
}

// when below line is uncommented this will throw the error
// console.log('foo: ', foo);

// shorthand properties in es6

let firstname = "Chitrank";
let lastname = "Dixit";

let person = {firstname, lastname};
// this would automatically convert the variable name to keys and variable values to the value for the relevant variable
console.log(person);

// more nested structures can be created
let mascot = "football";
let team = {person, mascot};
console.log(team);


var color = "red";
var speed = 10;
function go() {
  console.log("vroom")
}

var car = {color, speed};
console.log(car.color);
console.log(car.speed);

// es 5 way
var color = "red";
var speed = 10;

var car = {
  color,
  speed,
  go: function() {
    console.log("vroom")
  }
};
console.log(car.color);
console.log(car.speed);
car.go();

// es 6 way
var color = "red";
var speed = 10;

var car = {
  color,
  speed,
  go(){
    console.log("vroom")
  }
};
console.log(car.color);
console.log(car.speed);
car.go();

// computed properties
var color = "red";
var speed = 10;

var car = {
  color,
  speed,
  ["go"]: function (){
    console.log("vroom");
  }
};
console.log(car.color);
console.log(car.speed);
car.go();
console.log(car["go"]());

var color = "red";
var speed = 10;
var drive = "go";
var car = {
  color,
  speed,
  [drive]: function (){
    console.log("vroom");
  }
};
console.log(car.color);
console.log(car.speed);
car.go();
console.log(car[drive]());


// using the es6 spread operator
console.log([1,2,3]);


// using es6 spread operators
console.log(...[1,2,3]);

// some operations using the spread operator
let first = [1,2,3];
let second = [5,6,7];

first.push(...second);
console.log(first);

function addThreeThings(a, b, c){
  let result  = a + b + c;
  console.log(a,b,c);
  console.log(result);
}
addThreeThings(...first);
addThreeThings(...second);

// using template literals in es6
var salutation = "Hello";
var greeting = `${salutation}, World`;
console.log(greeting);

var greeting = `
${salutation},
World`;
console.log(greeting);

var place = "Indore";
var greeting = `
  ${salutation},    ${place}`;
console.log(greeting);

// we can also evaluate the expressions in these
var x = 1;
var y = 2;
var equation = `${x} + ${y} = ${x+y}`;
console.log(equation);

// using additional functions in the template literals
var message1 = `It's' ${new Date().getHours()}, I'm sleepy`;
console.log(message1);

function tag(strings, ...values){
  console.log(strings);
  console.log(values);
}


var message1 = tag `It's' ${new Date().getHours()}, I'm sleepy`;
console.log(message1);


function tag_new(strings, ...values){
  if(values[0] < 20) {
    values[1] = "awake";
  }

  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}


var message1 = tag_new `It's' ${new Date().getHours()}, I'm `;
console.log(message1);


// destructuring assingment in es6
var obj = {
  color : "blue"
};

console.log(obj.color);

var {color} = {
  color : "blue"
};

console.log(color);

var {color, position} = {
  color : "blue",
  position: "east"
};

console.log(color, position);

// using the function returning the object
function generateObj() {
  return {
    color: "blue",
    name: "john",
    state: "mp",
    position: "forward"
  }
}

var {name, state} = generateObj();

console.log(name);
console.log(state);

var {name:firstName, state:location} = generateObj();

console.log(firstName);
console.log(location);

// using with array
var [fist,,,,fifth] = ["1", "2", "3", "4", "5"];
console.log(fist, fifth);

// more with objects

var people = [
  {
    "firstName": "Clinton",
    "lastName": "Ruiz",
    "phone": "1-403-985-0449",
    "email": "pharetra@facilisislorem.org",
    "address": "Ap #829-3443 Nec St."
  },
  {
    "firstName": "Skyler",
    "lastName": "Carroll",
    "phone": "1-429-754-5027",
    "email": "Cras.vehicula.alique@diamProin.ca",
    "address": "P.O. Box 171, 1135 Feugiat St."
  },
  {
    "firstName": "Kylynn",
    "lastName": "Madden",
    "phone": "1-637-627-2810",
    "email": "mollis.Duis@ante.co.uk",
    "address": "993-6353 Aliquet, Street"
  },
  {
    "firstName": "Chaney",
    "lastName": "Edwards",
    "phone": "1-397-181-4501",
    "email": "rutrum@Nullamlobortis.net",
    "address": "P.O. Box 342, 9574 Egestas Street"
  }
];

people.forEach(({firstName}) => console.log(firstName));


var [,Skyler] = people;

function logEmail({email}){
  console.log(email);
}

// es6 modules import and export
// it has some other new github repo associated with it

// Converting an array-like object into an Array with Array.from()
// functions for manipulating nodelist as nodelist is array but it do not have the functions that
// comes up with the array , therefore Array.from() convert these structures into array for better operations


// TODO: The below method works well on browser
//const products =
//    Array.from(document.querySelectorAll('.product'));

// javascript function to select the nodelist
// TODO: The below method works well on browser
//products
//    .filter(product => parseFloat(product.innerHTML) < 10)
//    .forEach(product => product.style.color = 'red');

// promises in es6
// similar with angular $q service
var d = new Promise((resolve, reject) => {
  if (true){
    resolve("Hello Word");
  }
  else {
    reject("Not to print");
  }
});

d.then((data) => console.log("success: ", data));

d.catch((data) => console.log("Error: ", data));



// setting the timer function of the javascript so it would show the result with 2 seconds delay
var d = new Promise((resolve, reject) => {
  setTimeout( ()=> {
    if (true){
      resolve("Hello Word");
    }
    else {
      reject("Not to print");
    }
  } , 2000);

});

d.then((data) => console.log("success: ", data));

d.catch((data) => console.log("Error: ", data));

// if do not want to use catch method then we can have error callback in the then method itself
var d = new Promise((resolve, reject) => {
  setTimeout( ()=> {
    if (false){
      resolve("Hello Word");
    }
    else {
      reject("Not to print");
    }
  } , 2000);

});

d.then((data) => console.log("success: ", data), (error) => console.log("Error: ", error));

//d.catch((data) => console.log("Error: ", data));

var d = new Promise((resolve, reject) => {
  setTimeout( ()=> {
    if (false){
      resolve("Hello Word");
    }
    else {
      reject("Not to print");
    }
  } , 2000);

});

d.then((data) => {
  console.log("success: ", data);
}, (error) => {
  console.log("Error: ", error);
});


// .then and .catch can be changed together
//var d = new Promise((resolve, reject) => {
//  if (true){
//    resolve("Hello Word");
//  }
//  else {
//    reject("Not to print");
//  }
//});

d.then((data) => console.log("success: ", data)).
    catch((data) => console.log("Error: ", data));

// we can throw the error once it comes to us

var d = new Promise((resolve, reject) => {
  // throw just throw the error regardless our response is successful , it just finds a throw and executes this
  throw new Error('error thrown!');
  setTimeout( ()=> {
    if (false){
      resolve("Hello Word");
    }
    else {
      reject("Not to print");
    }
  } , 2000);

});


