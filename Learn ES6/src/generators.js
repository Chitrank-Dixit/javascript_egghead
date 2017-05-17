/**
 * Created by chitrankdixit on 5/16/17.
 */

// generators in es6
function* greet(){
    console.log(`You called 'next()'`);
    // this would give the value as hello instead undefined if not defined yield before
    yield 'Hii';
}

let greeter = greet();
console.log(greeter);
let next = greeter.next();
console.log(next);
let done = greeter.next();
console.log(done);


function* greet1(){
    console.log(`Generators are lazy`);
    // this would give the value as hello instead undefined if not defined yield before
    yield 'How';

    console.log(`I'm not called until the second next`);
    yield 'are';

    console.log(`Call me before you?`);
    yield 'you?';

    console.log(`Called when 'done'`);


}

var greeter1 = greet1();
console.log(greeter1.next());
console.log(greeter1.next());
console.log(greeter1.next());
console.log(greeter1.next());

var greeter3 = greet1();
console.log(greeter3.next().value);
console.log(greeter3.next().value);
console.log(greeter3.next().value);
console.log(greeter3.next().value);

var greeter2 = greet1();
for(let word of greeter2) {
    console.log(word);
}


function* greet2(){
    let friendly = yield "How";
    friendly = yield friendly + "are";
    yield friendly + "you?";
}

var greeter4 = greet2();
console.log(greeter4.next("first").value);
console.log(greeter4.next(" the heck ").value);
console.log(greeter4.next(" silly ol'").value);



function* graph(){
    let x = 0;
    let y = 0;
    while(true){
        yield {x:x, y:y}
        x += 2;
        y += 1;
    }
}


var graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);