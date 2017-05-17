/**
 * Created by chitrankdixit on 5/16/17.
 */

// map object is the simple key value map
// there are some imporvements in map which objects do not give us in javascript
// objects have prototype and keys has to be a string , whereas in the map it can be anything from a function to object to
// all other types of primitives, maps have some methods to keep track of size of the map but objects do not have such
var myMap = new Map();

/*
set()
get()
size
clear()
has()
 */

myMap.set('foo', 'bar');
myMap.set('hello', 'world');
console.log(myMap.get('foo'));
console.log(myMap.get('qwerty'));

// number of items in the map
console.log(myMap.size);


// has() checks if the key exists or not it returns true or false
console.log(myMap.has('hello'));
console.log(myMap.has('qwerty'));

// Iterators
// keys, entries and values method
console.log(myMap.keys());
console.log(myMap.entries());
console.log(myMap.values());

for (var key of myMap.keys()) {
    console.log(" ---- ",key);
}

for (var value of myMap.values()) {
    console.log(" ---- ",value);
}

for (var [key, value] of myMap.entries()) {
    console.log(" ---- ",[key, value]);
}

// clears all the keys in the map
console.log(myMap.clear());


console.log(myMap.size);


// maps mapping objects and functions
var myObj = {};
var myFunc = function(){};

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
myMap.set('string', 2);

console.log('get on myMap = ' + myMap.get(myObj));

//myMap.clear();

console.log('has on non-existing key = ' + myMap.has('qwerty'));


// weakmaps in es 6
// we can not use string as a key in the weakmap

var myWeakMap = new WeakMap();

var myObj2 = {};
var myFunc2 = function(){};

myMap.set(myObj2, 'bar');
myMap.set(myFunc2, 'world');

console.log(myMap.get(myObj));


// rest parameters vs arguments keywords
function myFunc1() {
    // arguments are the array
    console.log(arguments);

    // this will return the length of the array
    console.log(arguments.length);

    // TODO:arguments is array like but it doe not have all the parameters as in the array prototype
    //arguments.forEach(function(v, i, a){
    //    console.log(v, i, a);
    //});

}

myFunc1(1,2,3);


console.log("rest parameters _______________");

// Rest parameters

function Store() {
    var aisle = {
        fruit: [],
        vegetalbe: []
    };
    return {
        //Store().add('category', 'item1', 'item2');
        add: function(category, ...items) {
            //var items = [].splice.call(arguments, 1);
            console.log(items);
            items.forEach(function(value, index, array) {
                aisle[category].push(value);
            });
        },
        aisle: aisle
    }
}

var myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle);