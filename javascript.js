// Basic function outline //
// addition function
// subtraction function
// multiplication function
// division function

// Super Simple product, could adapt into larger scale later. Inclusive of exponents, order of operations 
// etc..
const buttons = document.getElementsByClassName("buttons");
let numberOne = "";
let numberTwo = "";
let operator;
let displayValue = document.getElementById("led-text");
let ledScreen = document.getElementById("led-screen");
let currentOperator;
let textTest;
let result;
const plus = '+';
const minus = '%';
const times = '*';
const dividedBy = '/';
let i = 0;

// Simple way to calculate longer numbers as there is no OoP.
// run the function. Then just run another function and allow the final answer to continue accumulating 
// += etc.. 
// until you hit clear button (Which I haven't made yet. heh.)

addition = () => {
    result = parseFloat(numberOne) + parseFloat(numberTwo);
    displayValue.innerHTML = result;
    return result;
};


subtraction = () => {
    result = numberOne-numberTwo;
    displayValue.innerHTML = result;
    return result;
};


multiplication = () => {
    result = numberOne * numberTwo;
    displayValue.innerHTML = result;
    return result;
};


division = () => {
    result = numberOne / numberTwo;
    displayValue.innerHTML = result;
    return result;
};


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


clearValues = () => {
    numberOne = result;
    result = undefined;
    numberTwo = "";
    operator = undefined;
}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        currentOperator = i;
        console.log("You have pressed " + i);
        
        switch (currentOperator) {
            case 0:
                displayValue.innerHTML += "7";
                console.log("You pressed the right one, WELL DONE!");
                if  (operator == undefined) {
                    numberOne += "7";
                    break;
                };
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

            case 3:
                displayValue.innerHTML += "/";
                operator = dividedBy;
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
                numberOne += "1";
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
                console.log(operate());
                operate();
                if (result !== undefined) {
                    clearValues();
                    break;
                };
                break;

            case 15:
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