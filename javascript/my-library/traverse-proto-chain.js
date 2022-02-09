//Create an object, eg. Date()
const myObject = new Date();
let object = myObject;
// Walk up the prototype chain and log the prototype.
// Stop when prototype is null.
do {
    object = Object.getPrototypeOf(myObject);
    console.log(object);
} while(object)