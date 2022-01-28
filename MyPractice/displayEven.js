var displayButton = document.getElementById("displayBtn");
var contentString = document.getElementById("displayCnt");
var inputForStartNum = document.getElementById("inputStartText");
var inputForEndNum = document.getElementById("inputEndText");
var inputForSetNum = document.getElementById("inputStep");

function validate() {

    //This removes any validation styles that were activated by a previous validation.
    numberFun.className = "needs-validation";
     contentString = "";
   //If it returns false, one or more form inputs are invalid. In that case, we add the was-validated class to the form and exit the function.
   //checkValidity adds validation pseudo classes to each invalid element. 
   if (!numberFun.checkValidity()) {
        numberFun.className = "was-validated";
        return false;
    }
    var startInput = parseInt(inputForStartNum.value);
    console.log(typeof(startInput))
    console.log(startInput)
    var endInput = parseInt(inputForEndNum.value);
    var stepInput = parseInt(inputForSetNum.value);
    if (startInput && endInput) {
        // So long as we actually HAVE a staring and ending value...
        if (!stepInput) stepInput = 2;
        // If we don't have an increment given, let's count by twos!
        contentString += "<p>The values between " + startInput + " and " + endInput + " in increments of " + stepInput + ":</p><ul>";
        for (i = startInput; i <= endInput; i += stepInput) {
          // If we are here, we have all three: start, end and increment
          contentString += "<li>" + i + "</li>";
        }
        contentString += "</ul>";
        // We've finished formatting the string, 
        //  let's output it to the proper div.
        //  Note that I'm using innerHTML, 
        //   document.writeln is considered bad.
        
        displayButton.innerHTML = contentString;
      }
    }
 

validate();
