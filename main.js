// 1/ The password
// Prompt the user for his first name and last name. Make sure they are not empty!
// Take the 3 first letters of each, in lowercase, concatenate them, then replace
// the Es with Is and the Os with Us.
// Then inform the user that this is his (super secret) password!
// If result is longer than 6 letters, tell him it's good; else, tell him it's weak.


function password() {
    var name = prompt("First Name")
    var lname = prompt("Last Name:")

    if (!name || !lname) password()

    let res = name.substr(0, 3).concat(lname.substr(0, 3)).toLowerCase().replaceAll('i', 'e').replaceAll('o', 'u');

    alert("your password" + res)

}


// 2/ A random number
// Write a function that picks a random integer between 0 and 10, multiplies it by 7, 
// and returns true if that number is even, or else false.

function number() {
    var num = Math.floor(Math.random() * 11);
    var result = String(num * 7).concat(result % 2 == 0 ? '\ntrue' : '\nfalse');

    alert(result);
}

// Write a function that given a number n, returns the area of a square of side n.
// Note: check your input! If numbers are negative or not provided, show an error and return 0
function areaofsquare(side) {

    if (side < 0 || !side) {
        alert("THE NUMBER IS NOT VALID");
        return 0;
    }
    return side * side;
}


// Write a function that given a number n, returns the area of a circle of radius n.
// Note: check your input! If numbers are negative or not provided, show an error and return 0
function circleRadius(radius) {
    if (radius < 0 || !radius) {
        alert("THE NUMBER IS NOT VALID");
        return 0;
    }
    return (Math.PI * radius * radius)

}

// Write a third function that given two numbers a and b, and using the two previous 
// functions above, returns true if the circle of radius b is bigger than the square of side a. 
// Else return false.
// Note: check your input! If numbers are negative or not provided, show an error and return 0
function circleAndSquare(side, radius) {
    return areaofsquare(side) < circleRadius(radius) ?
        "The circle area is greater than the square area" :
        "The circle area is less than the square area"

}


// 4/ The delivery date
// Prompt the user to input a delivery date for his product (MM/dd/yyyy).
// Make sure it is not empty or invalid format! Else ask him again to input.
// If date is in the past, show an error message.
// If date is in 2021, inform him that you cannot plan that far ahead...
// Else, inform his of the success of the operation.


function deliveryDate(message = 'Enter a delivery date') {
    const input = prompt(message, 'MM/dd/YY')

    if (!input) deliveryDate('Input was empty. Enter again!')
    else {
        const date = new Date(input)
        if (isNaN(date.getTime())) {
            deliveryDate('Date was not valid. Enter again!')
        } else if (date < new Date()) {
            deliveryDate('Date is in the past. Enter again!')
        } else if (date.getFullYear() >= 2021) {
            deliveryDate('Date is too far ahead')
        } else alert('Okay na. congratulations')
    }
}



// 5.A random array sum
// Write a function that given an integer n, generates n random integers between 0 and 100, and adds them to an array.
// Then removes the smallest element, and returns the sum of the rest.



function randomIntArraySum(n = 9) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        const r = Math.floor(Math.random() * 100) //getting random numbers
        arr.push(r)  //adding value to the array
    }
    console.log(arr)
    let m = Math.min(...arr)//get the minimum and split it 
    console.log(m)
    arr.splice(arr.indexOf(m), 1) //delete



    //get the sum of all the elements inside  array
    let sum = arr.reduce((a, b) => a + b)
    return sum
}




// 6/ Hellos
// Prompt the user for 10 names and store them. 
// Keeping only the ones longer than 5 letters, put them in capital letters, and then print a hello for each.
// Note: check your input before storing it!
// Tip: you need to use an array, and then map, filter and forEach


function tenNames() {
    let arr = []
    for (i = 0; i < 10; i++) {
        const name = prompt('Enter a name')
        if (!name) console.error('Input is empty')
        else arr.push(name) //add the names into the arr
    }

    console.log(arr)
    arr.filter(element => element.length > 5)  //gets the name with the length greater than 5
        .map(element => element.toUpperCase()) //transforms the elements in the array to upperCase
        .forEach(element => console.log('hello' + " " + element)) //go through each element and say hello


}
//7 fish doesn't have price
const prices = {
    "apple": 10,
    "banana": 25,
    "mangga": 10,
    "mangosteen": 80,
    "chicken": 55,
    "pork": 42
}

let cart = {
    "apple": 3,
    "mangga": 2,
    "fish": 1
}

function computeTotal() {
    let total=0
    for (key in cart) { //loop through the cart
        const qty = cart[key]
       let price = prices[key]
        
        if (!price) {
            console.error('Item not found')
            price=0  //change the price to zero
        }
        const subTotal = price * qty
        console.log(key, qty, "p" + price, "p" + subTotal)
        total+=subTotal
       

    }
   
    return total
}

//sample of merging two objects
let carts={
    "fish":1,
    "mango":5
}

let cart1={
    "apple":8,
    "orange":10
}

let mergeCart={...cart,...cart1}
console.log(mergeCart)

