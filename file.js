// Importing the other JavaScript file that contains the functions
const { printWelcomeMessage, convertMeasurement, doMathOperation, advancedFunction } = require('./script');

// Calling/invoke the list of functions from the second JavaScript file
printWelcomeMessage('Aryan', 'Majoka');
console.log(convertMeasurement(20, "Celsius", "Fahrenheit"));
console.log(doMathOperation(5, 3, '+'));
console.log(advancedFunction([1, 2, 3, 4, 5])); // Example input array