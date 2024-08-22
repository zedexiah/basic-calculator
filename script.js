const buttonsE1 = document.querySelectorAll("button");
const inputFieldE1 = document.getElementById("result");

for (let i = 0; i < buttonsE1.length; i++) {
    buttonsE1[i].addEventListener("click", () => {
        const buttonValue = buttonsE1[i].textContent;
        if (buttonValue.toLowerCase() === "c") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputFieldE1.value = "";
}

function calculateResult() {
    try {
        inputFieldE1.value = eval(inputFieldE1.value);
    } catch (error) {
        inputFieldE1.value = "Error";
    }
}

function appendValue(buttonValue) {
    inputFieldE1.value += buttonValue;
}