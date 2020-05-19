/* EXERCISE 1
Create and array with the first 5 positive numbers
*/


let listOfNumbers = [1, 2, 3, 4, 5];


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let myProfile = {
    name: "Anton",
    surname: "Petkov",
    email: "antonpetkov88@gmail.com",
    age: 30

};

//or

let myProfile = {
    name: "Anton",
    surname: "Petkov",
    email: "antonpetkov88@gmail.com",
    age: new Date().getFullYear() - 1990,

};


/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter 
you have or not a driving license
*/

myProfile.HasDrivingLicence = true;


/* EXERCISE 4
Remove from the previously created object the age
*/

  
delete myProfile.age;


/* EXERCISE 5
Create a second object with name, surname, email address and verify that
 this object has a different email address
*/

let profile2 = {
    name: "David",
    surname: "Guetta",
    email: "dguetta@email.com",
}

if (myProfile.email === profile2.email) {
    console.log("emails are the same");
}   else{
    console.log("emails are different");
}

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have 
the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more 
than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

let totalCart;
let shopping = 45;
let shipping = 10;
if (shopping>50) {
    shopping = totalCart;
    console.log("Total amount with free shipping = " + totalCart + "EUR");
} else {
    console.log("Total ammount plus shipping = " + (shopping + shipping) + "EUR");
}

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything 
has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same 
rules for the shipping cost, calculate the totalShopping.
*/

if (totalCart>50) {
    totalCart = shopping * 0.8;
    console.log("Free shipping" + totalCart + "EUR")
} else {
    totalCart = (shopping + shipping) * 0.8;
    console.log("Total ammount plus shipping =" + totalCart + "EUR")
}

/* EXERCISE 8
Create an object representing a car with properties like brand, model, 
licensePlate.
After you create the first car, clone it and change the licensePlate 
without affecting the original car.
Do it for five cars.
*/

let Car = {
    brand: "Mazda",
    model: "6",
    licencePlate: "M7878"
}

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
Create a new array called carsForRent containing all the cars from the 
previous exercise
*/

let carsForRent = [];
carsForRent.push(Car1, Car2, Car3, Car4, Car5);


/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/


carsForRent.shift();
carsForRent.pop();


