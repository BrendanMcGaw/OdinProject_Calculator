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
    return numberOne / numberTwo;

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
                numberTwo += "7";;
                break;
            case 3:
                operator = "/"
            case 14:
                console.log(operate());
                result = operate();
            default:
                break;
        }
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