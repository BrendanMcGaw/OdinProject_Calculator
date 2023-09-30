// Basic function outline //
// addition function
// subtraction function
// multiplication function
// division function

// Super Simple product, could adapt into larger scale later. Inclusive of exponents, order of operations 
// etc..
const buttons = document.getElementsByClassName("buttons");
const clearButton  = document.getElementById("clear-screen");
let numberOne = "";
let numberTwo = "";
let operator;
let displayValue = document.getElementById("led-text");
let ledScreen = document.getElementById("led-screen");
let currentOperator; // Allows us to look through our switch statement and find the corresponding index number.
let result;
const plus = '+';
const minus = '-';
const times = '*';
const dividedBy = '/';
let i = 0;


// Simple way to calculate longer numbers as there is no OoP.
// run the function. Then just run another function and allow the final answer to continue accumulating 
// += etc.. 
// until you hit clear button (Which I haven't made yet. heh.)

// Adds the two numbers together, passing them as floats (had string issues with calculations)
// displays the valueof the result on the led-screen.
addition = () => {
    result = parseFloat(numberOne) + parseFloat(numberTwo);
    displayValue.innerHTML = result;
    return result;
};

// Minuses the two numbers from one another
// displays the value of the result on the led-screen.
subtraction = () => {
    result = numberOne-numberTwo;
    displayValue.innerHTML = result;
    return result;
};

// Multiplies the two numbers together.
// displays the value of the result on the led-screen.
multiplication = () => {
    result = numberOne * numberTwo;
    displayValue.innerHTML = result;
    return result;
};

// Divides the two numbers.
// displays the value of the result on the led-screen.
division = () => {
    result = numberOne / numberTwo;
    displayValue.innerHTML = result;
    return result;
};

// Runs the operation to check the operator present and then calculates accordingly.
operate = () => {
    if (operator == plus) {
        return addition();
    };
    if (operator == minus) {
        return subtraction();
    };
    if (operator == times) {
        return multiplication();
    };
    if (operator == dividedBy) {
        return division();
    };
};

// This is a function to use for my clear button, to clear all calculations and start fresh.
clearEverything = () =>  {
    numberOne = "";
    numberTwo = "";
    operator = undefined;
    result = undefined;
    displayValue.innerHTML = "";
}

// This is my clear button event listener to clear everything when its clicked.
clearButton.addEventListener("click", () => {
    clearEverything();
});

// This resets the values of the variables to calculate the next set of equations.
// Sets numberOne as the result of the last equation to carry on calculations.
clearValues = () => {
    numberOne = result;
    result = undefined;
    numberTwo = "";
    operator = undefined;
}



// BUG FIX ---------- If you press a number, after pressing equals, instead  of an operator
// the number will be added to the result as part of the string. Making 25 (press 5) = 255. Whoops!
// ***pressing a number when there is a result on the screen, should clear all values and start fresh***

// BUG FIX ---------- Decimal numbers are a problem, need to Math.round to make it easier on the eyes!
// BUG FIX ---------- Double pressing an operator should result in an ERROR. Not a NaN+ or NaN*.

// BUG FIX ---------- Multiple decimal points will feck this thing up. Disable button after decimal contained
// within displayValue?

// Additional add backspace button?

// Add keyboard support?

// Add transformative text, informaing about the keyboard support?
// Maybe add keyboard hotkeys below for instruction?

// This giant for loop, loops through the buttons arrray defined by the classname. It will loop through
// the index numbers of the array and for the assigned buttons, add a new number or operator to the
// equation based on what button was clicked.
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        // Checks to see if you're trying to be a maniac!
        if (displayValue.innerHTML == "0/0") {
            alert("What the FUCK do you think you're trying to do here?");
            clearEverything();
        };
        currentOperator = i;
        console.log("You have pressed " + i);
        //  Our switch statement ties a number in the array to a button on the calculator.
        switch (currentOperator) {
            // In the case of 0. 0 in the array of buttons, is the #7 button on the calculator.
            case 0:
                // We add "7" to the display-screen through innerHTML changes.
                displayValue.innerHTML += "7";
                console.log("You pressed the right one, WELL DONE!");
                // Checks to make sure an operator isn't defined yet. If it isn't, adds the buttons number
                // to the numberOne variable for our equation.
                if  (operator == undefined) {
                    numberOne += "7";
                    break;
                };
                // If operator is in-fact already assigned, this will allow us to add the second number 
                // of the equation.
                numberTwo += "7";
                break;

            case 1:
                displayValue.innerHTML += "8";
                console.log("This is the number 8 key");
                if (operator == undefined) {
                    numberOne += "8";
                    break;
                };
                numberTwo += "8";
                break;

            case 2:
                displayValue.innerHTML += "9";
                console.log("This is the number 9 key");
                if (operator == undefined) {
                    numberOne += "9";
                    break;
                };
                numberTwo += "9";
                break;
            // In this case 3, happens to be an operator button.
            case 3:
                // This if statement, checks to make sure an operator isn't currently in use. 
                // So that if there is an operator in use, this will just run the equation that it already
                // had and add the new operator of the case, to the next part of the equation.
                // allowing the user to daisy chain a long equation together in 1 go, calculating on the  fly.
                if (operator == plus || operator == minus || operator == dividedBy || operator == times ) {
                    operate();
                    numberOne = result;
                    numberTwo = "";
                }
                displayValue.innerHTML += "/"; // displays / on the led-screen.
                operator = dividedBy; // assigns the division sign to the operator variable.
                break;

            case 4:
                displayValue.innerHTML += "4";
                console.log("This is the number 4 key");
                if (operator == undefined) {
                    numberOne += "4";
                    break;
                };
                numberTwo += "4";
                break;

            case 5:
                displayValue.innerHTML += "5";
                console.log("This is the number 5 key");
                if (operator == undefined) {
                    numberOne += "5";
                    break;
                };
                numberTwo += "5";
                break;

            case 6:
                displayValue.innerHTML += "6";
                console.log("This is the number 6 key");
                if (operator == undefined) {
                    numberOne += "6";
                    break;
                };
                numberTwo += "6";
                break;
                
            case 7:
                if (operator == plus || operator == minus || operator == dividedBy || operator == times ) {
                    operate();
                    numberOne = result;
                    numberTwo = "";
                }
                displayValue.innerHTML += "*";
                operator = times;
                break;

            case 8:
                displayValue.innerHTML += "1";
                console.log("This is the 1 key");
                if (operator == undefined) {
                    numberOne += "1";
                    break;
                };
                numberTwo += "1";
                break;

            case 9:
                displayValue.innerHTML += "2";
                console.log("this is the number 2 key");
                if (operator == undefined) {
                    numberOne += "2";
                    break;
                };
                numberTwo += "2";
                break;

            case 10:
                displayValue.innerHTML += "3";
                console.log("This is the number 3 key");
                if (operator == undefined) {
                    numberOne += "3";
                    break;
                };
                numberTwo += "3";
                break;

            case 11:
                if (operator == plus || operator == minus || operator == dividedBy || operator == times ) {
                    operate();
                    numberOne = result;
                    numberTwo = "";
                }
                displayValue.innerHTML += "-";
                console.log("This is the subtraction key");
                operator = minus;
                break;

            case 12:
                displayValue.innerHTML += "0";
                console.log("This is the number 0 key");
                if (operator == undefined) {
                    numberOne += "0";
                    break;
                };
                numberTwo += "0";
                break;

            case 13:
                displayValue.innerHTML += ".";
                console.log("This is the decimal key");
                if (operator == undefined) {
                    numberOne += ".";
                    break;
                };
                numberTwo = ".";
                break;

            case 14:
                // if numberOne is empty when they press the equal sign, it ERRORS out.
                if (numberOne == ""){
                    displayValue.innerHTML = "ERROR.";
                    break;
                };
                console.log(operate());
                // Runs the operate function. Calculating the equation.
                operate();
                // if result is not strictly undefined, it will clear all values to continue calculations.
                // *NOTE*:: Will not clear numberOne as that is what we are carrying on from.
                if (result !== undefined) {
                    clearValues();
                    break;
                };
                break;

            case 15:
                if (operator == plus || operator == minus || operator == dividedBy || operator == times ) {
                    operate();
                    numberOne = result;
                    numberTwo = "";
                }
                displayValue.innerHTML += "+";
                console.log("This is the addition key");
                operator = plus;
                break;

            default:
                break;
        }
        console.log(displayValue);
    });
};


// buttons[3].addEventListener("click", () => {
//     console.log("The pressed the division key");
// });

// buttons[7].addEventListener("click", () => {
//     console.log("You pressed the multiplication key");
// });

// buttons[11].addEventListener("click", () => {
//     console.log("You pressed the subtraction key");
// });

// buttons[15].addEventListener("click", () => {
//     console.log("You pressed the addition key");
// });