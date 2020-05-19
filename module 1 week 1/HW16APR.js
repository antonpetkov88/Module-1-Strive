/* EXERCISE 1
*/
let listOfNumbers = [1, 2, 3, 4, 5];
console.log (listOfNumbers);

/* EXERCISE 2
*/
const myObject = {
    name: "Anton",
    surname: "Petkov",
    email: "antonpetkov88@gmail.com",
    age: 30

}
console.log (myObject);


/* EXERCISE 3
*/
myObject.HasDrivingLicence = "yes/no";
console.log(myObject);

/* EXERCISE 4
*/  
delete myObject.age;
console.log (myObject);

/* EXERCISE 5
*/
const myObject2 = {
    name: "David",
    surname: "Guetta",
    email: "dguetta@email.com",
}
console.log (myObject2);

if (myObject.email === myObject2.email) {
    console.log("emails are the same");
}   else{
    console.log("emails are different");
}

/* EXERCISE 6
*/
let totalcart;
let shopping = 45;
let shipping = 10;
if (shopping>50) {
    shopping = totalcart;
    console.log("Total amount with free shipping = " + totalcart + "EUR");
} else {
    console.log("Total ammount plus shipping = " + (shopping + shipping) + "EUR");
}

/* EXERCISE 7
*/
if (totalcart>50) {
    totalcart = shopping * 0.8;
    console.log("Free shipping" + totalcart + "EUR")
} else {
    totalcart = (shopping + shipping) * 0.8;
    console.log("Total ammount plus shipping =" + totalcart + "EUR")
}

/* EXERCISE 8
*/
let Car = {
    brand: "Mazda",
    model: "6",
    licencePlate: "M7878"
}
console.log(Car);

let Car1 = Object.assign({}, Car);
Car1.licencePlate = "C1245";
console.log(Car1);

let Car2 = Object.assign({}, Car)
Car2.licencePlate = "B1423"
console.log(Car2);

let Car3 = Object.assign({}, Car);
Car3.licencePlate = "D1545";
console.log(Car3);

let Car4 = Object.assign({}, Car);
Car4.licencePlate = "C1555";
console.log(Car4);

let Car5 = Object.assign({},Car);
Car5.licencePlate = "V3324"
console.log(Car5);

/* EXERCISE 9
*/
let CarsForRent = [];
CarsForRent.push(Car1, Car2, Car3, Car4, Car5);
console.log(CarsForRent);

/* EXERCISE 10
*/
CarsForRent.pop();
CarsForRent.shift();
console.log(CarsForRent);



