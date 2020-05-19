
/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/

console.log(12 + 20);

//or

console.log("Sum of 12+20  = " + (12+20));

/* EXERCISE 2
Create a variable named X containing the number 12
*/

let x = 12;


/* EXERCISE 3
Create a variable named name containing the string John Doe
*/

let name = "John Doe";


/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/

console.log(12 - x);

//or

console.log("DIFFERENCE between the number 12 and the variable X : "+(12-x));

/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/

let name1 = "john";
let name2 = "John";
if (name1 === name2) {
    console.log("Names are equal");
} else {
    console.log("Names are not equal");
}
if (name1.toLowerCase() === name2.toLowerCase()) {
    console.log("Contains the same value");
} else {
    console.log("not containing same value");

}

//or

let name1 = "john";
let name2 = "John";

console.log(name1!==name2 ? "name1 is different from name2":"name1 is same with name2");
console.log(name1.toLowerCase()===name2.toLowerCase() ? "contains same value":"not containing same value");

/* EXERCISE 6
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/

let y = 8;

if (y === 1) {
    console.log("one");
} else if (y === 2) {
    console.log("two");
} else if (y === 3) {
    console.log("three");
} else if (y === 4) {
    console.log("four");
} else if (y === 5) {
    console.log("five");
} else if (y === 6) {
    console.log("six");
} else if (y === 7) {
    console.log("seven");
} else if (y === 8) {
    console.log("eight");
} else if (y === 9) {
    console.log("nine");
}

/* EXERCISE 7
Insert a value in a variable based on the resut of a ternary if
*/

let productionYear = 2020;
let car = "unknown";

if(productionYear<=2020 && productionYear>=2015){
    car="new car"
    console.log("Car : " + car);
}

else if(productionYear<=2014 && productionYear>=2000){
    car="not so old car"
    console.log("Car : "+ car);
}

else if(productionYear<=1999 && productionYear>=1979){
    car="old car"
    console.log("Generation : "+generation);
}

else if(productionYear<=1944 && productionYear>=1900){
    car="antique"
    console.log("Car : "+ car);
}


