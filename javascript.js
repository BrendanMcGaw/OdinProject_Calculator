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
let displayValue = "";
let currentOperator;
let textTest;
let result = "";
const plus = '+';
const minus = '-';
const times = '*';
const dividedBy = '/';
let i = 0;

// Simple way to calculate longer numbers as there is no OoP.
// run the function. Then just run another function and allow the final answer to continue accumulating 
// += etc.. 
// until you hit clear button (Which I haven't made yet. heh.)

addition = () => {
    return parseFloat(numberOne) + parseFloat(numberTwo);
};


subtraction = () => {
    return numberOne - numberTwo;
};


multiplication = () => {
    return numberOne * numberTwo;
};


division = () => {
    result = numberOne / numberTwo;
    displayValue = result;
    return result;
};


getOperator = () => {

}


operate = () => {
    if (operator = dividedBy) {
        return division();
    }
};


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        currentOperator = i;
        displayValue += buttons[i].innerHTML;
        console.log("You have pressed " + i);
        switch (currentOperator) {
            case 0:
                console.log("You pressed the right one, WELL DONE!");
                if  (operator == undefined) {
                    numberOne += "7";
                    break;
                }
                numberTwo += "7";
                break;
            case 1:
                console.log("This is the number 8 key");
                if (operator == undefined) {
                    numberOne += "8";
                    break;
                }
                numberTwo += "8";
                break;
            case 2:
                console.log("This is the number 9 key");
                if (operator == undefined) {
                    numberOne += "9";
                    break;
                }
                numberTwo += "9";
                break;
            case 3:
                operator = dividedBy;
                break;
            case 4:
                console.log("This is the number 4 key");
                if (operator == undefined) {
                    numberOne += "4";
                    break;
                }
                numberTwo += "4";
                break;
            case 5:
                console.log("This is the number 5 key");
                if (operator == undefined) {
                    numberOne += "5";
                    break;
                }
                numberTwo += "5";
                break;
            case 6:
                console.log("This is the number 6 key");
                if (operator == undefined) {
                    numberOne += "6";
                    break;
                }
                numberTwo += "6";
                break;
            case 7:
                operator = dividedBy;
                break;
            case 8:
                console.log("This is the 1 key");
                if (operator == undefined) {
                    numberOne += "1";
                    break;
                }
                numberOne += "1";
                break;
            case 9:
                console.log("this is the number 2 key");
                if (operator == undefined) {
                    numberOne += "2";
                    break;
                }
                numberTwo += "2";
                break;
            case 10:
                console.log("This is the number 3 key");
                if (operator == undefined) {
                    numberOne += "3";
                    break;
                }
                numberTwo += "2";
                break;
            case 11: 
                console.log("This is the subtraction key");
                operator == minus;
                break;
            case 12:
                console.log("This is the number 0 key");
                if (operator == undefined) {
                    numberOne += "0";
                    break;
                }
                numberTwo += "0";
                break;
            case 13:
                console.log("This is the decimal key");
                if (operator == undefined) {
                    numberOne += ".";
                    break;
                }
                numberTwo = "."
                break;
            case 14:
                console.log(operate());
                return operate();
            case 15:
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