// First Function: print welcome message
function printWelcomeMessage(firstName, lastName) {
        console.log(`Welcome ${firstName} ${lastName} to G@I College`);
    }
    

// Second Function: convert measurement units
function convertMeasurement(value, initialUnit, targetUnit) {
    if (initialUnit === "Celsius" && targetUnit === "Fahrenheit") {
        return value * 9/5 + 32;
    } else if (initialUnit === "Fahrenheit" && targetUnit === "Celsius") {
        return (value - 32) * 5/9;
    } else {
        return "Invalid conversion";
    }
}

// Third Function: perform math operations
function doMathOperation(...values) {
    let result = values[0];
    for (let i = 1; i < values.length; i++) {
        if (values[i + 1] === '+') {
            result += values[i];
        } else if (values[i + 1] === '-') {
            result -= values[i];
        } else if (values[i + 1] === '*') {
            result *= values[i];
        } else if (values[i + 1] === '/') {
            result /= values[i];
        }
    }
    return result;
}

// Fourth Function: advanced function
function advancedFunction(array) {
    // Find the maximum value in the array
    const max = Math.max(...array);
    
    // Find the minimum value in the array
    const min = Math.min(...array);
    
    // Calculate the average of the array
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    const average = sum / array.length;

    return {
        max,
        min,
        average
    };
}

module.exports = {
    printWelcomeMessage,
    convertMeasurement,
    doMathOperation,
    advancedFunction
};
