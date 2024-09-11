// 1.
// Declare and initialise variables (names and values of your variables are up to you) for each of the types below. First use type inference. Then try explicitly providing a type annotation. An example has been given for the first one.

// boolean (hint: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean). Example:
const isMale : boolean = true;
console.log("isMale?, (boolean): ", isMale);

// string
const myName : string = "Abhi";
console.log("myName, (string): ", myName);

// number
const myAge : number = 23;
console.log("myAge, (number): ", myAge);

// an array of booleans (hint: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
const arrayOfBooleans : boolean[] = [true, true, false, true, false, false, true] 
console.log("arrayOfBooleans, (array[boolean]): ", arrayOfBooleans);

// an array of numbers
const arrayOfNumbers : number[] = [2, 3, 4, 5, 6] 
console.log("arrayOfNumbers, (array[number]): ", arrayOfNumbers);

// an array of strings
const arrayOfStrings : string[] = ["a", "b", "c", "x", "y,", "z"] 
console.log("arrayOfStrings, (array[string]): ", arrayOfStrings);


// 2.
// Declare and implement a function which takes in two numbers and 
//  returns their sum. Have type annotations for both the parameters and the return value
const addFunction = function (input1 : number, input2 : number) {
    const value : number = input1 + input2;
    return value;
}


// 3.
// Declare a new type that describes an object (hint: https://www.typescriptlang.org/docs/handbook/2/objects.html) 
//  containing the keys and types below:

//    - amount: a number
//    - uniqueId: a string
//    - isValid: a boolean
//    - addressLines: an array of strings

interface randomInterface{
    amount : number,
    uniqueId : string,
    isValid : boolean,
    addressLines : string[]
};

const randomObject : randomInterface = {
    amount : 4,
    uniqueId : "some string",
    isValid : false,
    addressLines : ["string 1", "string 2", "string 3"]
}
