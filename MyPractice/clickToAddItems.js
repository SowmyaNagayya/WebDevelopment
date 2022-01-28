// These elements will be used in both functions.
var numberFun = document.forms["numberFun"];
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

function validate() {

    //This removes any validation styles that were activated by a previous validation.
    numberFun.className = "needs-validation";
   //If it returns false, one or more form inputs are invalid. In that case, we add the was-validated class to the form and exit the function.
   //checkValidity adds validation pseudo classes to each invalid element. 
   if (!numberFun.checkValidity()) {
        numberFun.className = "was-validated";
        return false;
    }

    //if the form is valid, we proceed with calculations. Remembering that form data is always treated as strings, we parse each input's value to an integer and then use the integers to calculate addition, subtraction, multiplication, and division.
    var operand1 = parseInt(num1.value, 10);
    var operand2 = parseInt(num2.value, 10);

    document.getElementById("addResult").innerText = operand1 + operand2;
    document.getElementById("subtractResult").innerText = operand1 - operand2;
    document.getElementById("multiplyResult").innerText = operand1 * operand2;
    document.getElementById("divideResult").innerText = operand1 / operand2;

    results.style.display = "block";
    submitButton.innerText = "Recalculate";

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}

function resetView() {
    //The resetView function hides Bootstrap validation by removing the was-validated class and replacing it with needs-validation. 
    numberFun.className = "needs-validation";
    results.style.display = "none";
    submitButton.innerText = "Calculate";
    //And finally put focus in the first numeric input with its focus function.
    num1.focus();
}