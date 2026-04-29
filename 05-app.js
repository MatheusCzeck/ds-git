// Function Declaration
function myFunction(x,y) {
    return x * y;
}

console.log("Function declarate", myFunction(3,4));

// Function Expression (Named)
const myFunctionExpression = function mult(x,y) {
    return x*y
}
console.log("Function Expression (Named)", myFunctionExpression(3,4))
const myFunctionAnonymous = function (x,y) {
    return x*y
}
console.log("Function Expression (Anonymous)", myFunctionAnonymous(3,4))
const myFunctionArrow = (x,y) => x * y;
console.log("Arrow function ", myFunctionArrow(3,4))

const myFunctionConstructor = new Function("x", "y", "return x * y")
console.log("Function Constructor ", myFunctionConstructor(3,4));

const obj = {
    myFunctionObject(x,y) {
        return x * y;
    },
};
console.log("Object Method", obj.myFunctionObject(3,4))