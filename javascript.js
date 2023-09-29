// Basic function outline //
// addition function
// subtraction function
// multiplication function
// division function

// Super Simple product, could adapt into larger scale later. Inclusive of exponents, order of operations 
// etc..
const buttons = document.getElementsByClassName("buttons")
let numberOne;
let numberTwo;
let displayValue;
let currentOperator;
let textTest;
const plus = '+';
const minus = '-';
const times = '*';
const dividedBy = '/';
let i = 0;


addition = () => {
    return numberOne + numberTwo;
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
    if (11 == true) {
        subtraction();
    };
    if (7 == true) {
        multiplication();
    };
    if (3 == true) {
        division();
    };
};


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        currentOperator = i;
        console.log("You have pressed " + i);
    })
}

switch (currentOperator) {
    case 0: 
        console.log("You pressed the right one, WELL DONE!");
        textTest = "YOU DID  IT!"
        
        break;

    default:
        break;
}

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