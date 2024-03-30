/* 16-Mar-2024 */

// var name;
// console.log(name);

// name = "Aragorn";
// console.log(name);

// name = "Elessar";
// console.log(name);

// let book; 
// console.log(book);

// book = "A brief history of time!";
// console.log(book);

// book = "Theory of Everything!";
// console.log(book);

// const pi = 3.14;
// console.log(pi);

// //Below will result in error - TypeError: Assignment to constant variable.
// /* pi = 3.141; 
// console.log(pi); */

//----------------------------------------------------------------------

/* console.log(9/2);
console.log(9%2);
console.log(9/0);
console.log(0/2);
console.log(0/0);
console.log(0**0);
console.log(8**0); */

//17 Mar 2024 

/* var myStr = "Hardest choices requires the strongest will!";
myStr = "I'm inevitable!";
myStr = "Albert Einstein said - \"Imagination is more important than knowledge\"" // "" within ""
myStr = 'Albert Einstein said - "Imagination is more important than knowledge"' // "" within ''
myStr = 'I\'ll be back'; // '' within ''
myStr = "I'll be back"; // '' within ""
myStr = `Schrodinger's "Cat"`; //Usage of Backticks
console.log(myStr);

var path = "C:\\Code\\JavaScript"; //Escapting a backslash using a backslash
console.log(path);

var firstName = "Isaac";
var lastName = "Newton";
var fullName = firstName + " " + lastName; //Concatenation
console.log(fullName);

var movie = "The Lord of the Rings";
movie += " : " //Appending string
var subTitle = "The Fellowship of the Ring!"; 
movie += subTitle; //Appending string variables
console.log(movie);
console.log("Movie string length - ", movie.length); */

//18 Mar 2024

/* const nomen = "Harry Potter";
console.log(nomen[0]); //first letter
console.log(nomen[nomen.length - 1]); //last letter

nomen[0] = "B";
console.log(nomen); //No change since string is immutable!
// nomen = "Gimli"; // Error
// console.log(nomen);

const days = ['sun', 'mon', 'tues', 'wednes', 'thurs', 'fri', 'satur'];
console.log(days);
console.log(days[2]);

const ipl = [['csk', 5], ['mi', 5], ['kkr', 2]]
console.log(ipl);
console.log(ipl[1]);
console.log(ipl[0][0]);

const binaries = [0, 1, 10, 11, 4];
binaries[4] = 100;
console.log(binaries); */

//19 Mar 2024
/* const fibonacciSeries = [1, 1, 2, 3];
console.log(fibonacciSeries);

fibonacciSeries.push(5); //Adds items to the end of the array.
console.log(fibonacciSeries);

fibonacciSeries.push([8, 13]);
console.log(fibonacciSeries);

fibonacciSeries.push("Jabroni");
console.log(fibonacciSeries);

fibonacciSeries.pop(); //Removes the last element from the array.
console.log(fibonacciSeries);

fibonacciSeries.shift(); //Removes the first element from the array and shift all other elements to left1
console.log(fibonacciSeries);

fibonacciSeries.unshift("The Rock!");
console.log(fibonacciSeries); */

//Functions

// function printText(){
//     console.log("A quick brown fox jumps over a lazy dog!");
// }

// printText();

// function add(num1, num2){
//     console.log(num1 + num2);
// }

// add(3, 18);
// add(4, "four");
// add("four", 4);

/* let myName = "Legolas";

function greet() {
    myName = "Galadriel";
    if (typeof myName != undefined) {
        console.log("Hello, ", myName)
    }
    else {
        console.log("Name is not defined!")
    }
}

console.log("Hello, ", myName + " from outside!");
greet();
console.log("Hello, ", myName + " from outside!"); */

//20 Mar 2024

/* function greet() {
    myName = "Galadriel"; //Add var and execute
    console.log("Hello, ", myName)
}

greet();
console.log("Hello, ", myName + " from outside!");

function factorial(number){
    factorial = 1;
    while (number > 1){
        factorial *= number;
        number--;
    }
    return factorial;
}

console.log(factorial(7));

let primes = [2, 3, 5, 7, 11];
console.log(primes);
console.log(JSON.stringify(primes)); */

//21 Mar 2024

// console.log(2 == 2);
// console.log(2 == '2');

// //Strict equality: Checks both value and type.
// console.log(2 === 2);
// console.log(2 === '2');
// console.log(2 !== '2'); //Strict inequality operator

// /* >, <, >=, <=
// AND - &&
// OR - ||     */

// function canVote(age){
//     if(age >= 18){
//         console.log("Can Vote!");
//     }
//     else{
//         console.log("Can't vote");
//     }
// }

// canVote(12);
// canVote(18);
// canVote(60);
// canVote("22");
// canVote("a");


// function hydrogenIsotopes(noOfNeutrons){
//     let isotopeName = "";
//     switch(noOfNeutrons){
//         case 1:
//             isotopeName = "Hydrogen";
//             break;
//         case 2:
//             isotopeName = "Deuterium";
//             break;
//         case 3:
//             isotopeName = "Tritium";
//             break;
//         default:
//             break;        
//     }

//     return isotopeName;
// }

// console.log(hydrogenIsotopes(2));

//22 Mar 2024

/* function isLess(a, b){
    return a < b;
}

console.log(isLess(8, 4));
console.log(isLess(0.1, 5));
console.log(isLess(1/2, 3/4));
console.log(isLess('a', 'b'));
console.log(isLess('a', 'aa'));
console.log(isLess('aa', 'a'));
console.log(isLess('ab', 'a'));

function division(dividend, divisor){
    if(divisor == 0){
        console.log("Can't divide by Zero!");
    }

    const quotient = dividend / divisor;
    const remainder = dividend % divisor;

    //return "quotient - " + quotient + " " + "and remainder - " + remainder;

    //Observe the output of below two statements
    console.log("quotient - ", quotient, " " + "and remainder - ", remainder); 
    console.log("quotient - ", quotient + " " + "and remainder - " + remainder);
}

//console.log(division(7, 3));
// console.log(division(5, 0));
// console.log(division(100, 5));
// console.log(division(0, 0));
// console.log(division(21, 4));
division(7, 3); */

//23 Mar 2024

/* const human = {
    kingdom: "Animalia",
    phylum: "Chordata",
    class: "Mammalia",
    order: "Primates",
    family: "Hominidae",
    genus: "Homo",
    species: "Sapiens"
}

console.log(human);
console.log(human.kingdom);
console.log(human.family);
console.log(human["class"]); //Bracket notation

human.domain = "Eukaryota"; //adding new properties to objects.
console.log(human); 

// delete human["domain"];
// console.log(human);

function hasProperty(prop){
    if(human.hasOwnProperty(prop)){
        return human[prop];
    }
    else{
        return "Property Not found!"
    }
}

console.log(hasProperty("species"));
console.log(hasProperty("name")); */

//24 Mar 2024

/* const myTvShows = [
    {
        name: "Naruto",
        type: "Anime",
        ott: "Netflix"
    },
    {
        name: "The Big Bang Theory",
        type: "Sitcom",
        ott: "Amazon Prime"
    }
];

console.log(myTvShows[0].name);
console.log(myTvShows[1].ott);

const myTvShowsCopy = JSON.parse(JSON.stringify(myTvShows)); //To keep the original object/Array unchanged.

myTvShowsCopy[1].ott = "Netflix";
console.log(myTvShows);
console.log(myTvShowsCopy);

//Print prime numbers below 100;

function isPrime(num){
    if(num === 2 || num === 3 || num === 5){
        return num + " is Prime";

    }
    else if(num % 2 == 0){
        return num + " is not Prime: divisible by - " + 2;
    } 
    else{
        for(let i=3; i<num/2; i++){
            if(num % i == 0){
                return num + " is not Prime: divisible by - " + i;
            }       
        }     
        return num + " is Prime";         
    }
}

console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(12));
console.log(isPrime(27));
console.log(isPrime(89));
console.log(isPrime(25)); */

//25 Mar 2024

/* let myArray1 = [];

for(let i=9; i>0; i-=2){
    myArray1.push(i);
}
console.log(myArray1);


let myArray2 = [[1, 2], [3, 4, 5, 6], [7, 8], [9, 10]];

function multiplyAll(arr){
    let product = 1;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            product *= arr[i][j]
        }
    }
    return product;
}
console.log(multiplyAll(myArray2));

console.log(Math.random()); //Generates random number between 0 and 1.
console.log(Math.floor(Math.random() * 10)); */

//26 Mar 2024

/* console.log(Math.floor(Math.random())); //Always zero.
console.log(Math.ceil(Math.random())); //Always one.

function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomRange(1, 6)); //Including 1 and 6

console.log(parseInt("12"));
console.log(parseInt("Ab")); //NaN
console.log(parseInt(true)); //NaN  

console.log(parseInt("1111", 2)); //Binary to Decimal
console.log(parseInt("1111", 8)); //Octal to Decimal
console.log(parseInt("1111", 16)); //Hexadecimal to Decimal */

/* function numSign(num){
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}

console.log(numSign(8));
console.log(numSign(-8));
console.log(numSign(-133739699));
console.log(numSign(0));

var player1 = "Ronaldo";
console.log(player1);
var player1 = "Messi";

let player2 = "Federer";
//let player2 = "Nadal" //Not allowed
player2 = "Nadal"; //Reassigning 

console.log(player1);
console.log(player2); */

//27 Mar 2024

//Why var is not recommended!
// function scope(){
//     //Try commenting the below two declarations!
//     var myVar1 = "Var Function Scope";
//     let myVar2 = "Let Function Scope";

//     if(true){
//         var myVar1 = "Var Block Scope";
//         let myVar2 = "Let Block Scope";
//         console.log("Block:", myVar1);
//         console.log("Block:", myVar2);
//     }
//     console.log("Function:", myVar1);
//     console.log("Function:", myVar2);
// }

// scope();

// const myArray = ["Federer", "Nadal", "Djokovic"];
// console.log(myArray);
// //myArray = ["Alcaraz"]; //Error - Assignment to const variable

// //You can mutate the array items nevertheless!
// myArray[0] = "Alcaraz";
// myArray[1] = "Sinner";
// myArray[2] = "Mededev";

// console.log(myArray);

// const MATH_CONSTANTS = {
//     PI : 3.14,
//     EPSILON : 2.71
// };

// console.log(MATH_CONSTANTS);

// MATH_CONSTANTS.PI = 10; //Mutation is allowed.
// console.log(MATH_CONSTANTS);

// //How to prevent? ==> Object freeze!

// Object.freeze(MATH_CONSTANTS);

// MATH_CONSTANTS.EPSILON = 100;
// MATH_CONSTANTS.PI = 99;
// console.log(MATH_CONSTANTS);
// //No errors in console. But values not changed!

// const arrayConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(arrayConcat([1, 3], [2, 4]));

//28 Mar 2024

// const realNumberArray = [20, -23, 44, 52, -90, -36, 12, 8, 0, -27, 68];

// function naturalNumberSquared(arr) {
//     return arr.filter(number => Number.isInteger(number) && number > 0)
//         .map(x => x * x);
// }

// const naturalNumberSquaredArray = naturalNumberSquared(realNumberArray);
// console.log(naturalNumberSquaredArray);

// function increment(value, step = 1){ //default parameter
//     return value + step;
// }

// console.log(increment(5, 3));
// console.log(increment(4));

// function innumerable(...args){ //spread operator
//     return args.reduce((a, b) => a + b, 100); //100 is initial value
// }

// console.log(innumerable(1, 2, 3, 4));

// const arr1 = ["Mercury", "Venus", "Earth", "Jupiter"];
// // const arr2 = arr1;
// // arr2[3] = "Mars"
// // console.log(arr1);
// // console.log(arr2);
// const arr2 = [...arr1]; //creates a copy. 
// arr2[3] = "Mars"
// console.log(arr1);
// console.log(arr2);

//Question - How do you create a copy of an array?

// const animal = {
//     name: "Lion",
//     species: "Leo",
//     genus: "Panthera"
// }

// //Destructuring
// const { species: x, genus: y } = animal;
// console.log(x);
// console.log(y);

// const books = {
//     name: "Lord of the Rings",
//     properties: {
//         numberOfPages: 1000,
//         genre: "Fantasy"
//     }
// }

// //Destructuring nested properties.
// const {properties: {genre: Genre}} = books;
// console.log(Genre);

// //Destructuring arrays
// const [a, b] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a);
// console.log(b);

// const [first, second, , , fifth] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
// console.log(first);
// console.log(second);
// console.log(fifth);

// let [m, n] = [1, 2];
// console.log("Before Swapping - ", [m, n]);
// [n, m] = [m, n];
// console.log("After Swapping - ", [m, n]);

//Question - How do you swap two numbers in Javascript?

//29 Mar 2024
/* const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [, , ...arr] = num; //removes first two elements from the array.

console.log(arr);

const watch = {
    name: "Rolex",
    type: "Analog",
    brandAmbassador: "Federer",
    country: "Switzerland"
};

function printWatch1(watch) {
    console.log(watch.name, watch.brandAmbassador);
}

function printWatch2({ name, country }) {
    console.log(name, country);
}

printWatch1(watch);
printWatch2(watch);

const animal = {
    name: "Naayi",
    species: "Dog",
    sound: "Bark"
};

console.log(`Hello, my name is ${animal.name} and I ${animal.sound}!`);

function createPerson(name, age, gender) {
    return ({ name, age, gender });
};
console.log(createPerson("Elrond", "3000", "Male"));

const bike = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear
    }
}

console.log(bike);
bike.setGear(5);
console.log(bike);

//Class declaration

class SuperHero {
    constructor(name){
        this.superHeroName = name;
    }
}

let superHero = new SuperHero("IronMan");
console.log(superHero.superHeroName);

class TvShow{
    constructor(name, seasons){
        this._name = name,
        this._numberOfSeasons = seasons
    };

    get tvShowName(){
        return this._name;
    }

    set tvShowName(name){
        this._name = name;
    }
}

let tvShow = new TvShow();
console.log(tvShow.tvShowName); //Undefined!

tvShow.tvShowName = "Big bang theory!";
console.log(tvShow.tvShowName);

let tvShow2 = new TvShow("Peaky Blinders!", 2);
console.log(tvShow2.tvShowName); */

// import { stringUpperCase } from "./stringFunctions";

// const text = "One ring to rule them all!";
// console.log(stringUpperCase(text));