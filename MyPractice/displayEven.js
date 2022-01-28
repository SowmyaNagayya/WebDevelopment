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
    // So long as we actually HAVE a staring and ending value...
    if (startInput && endInput) {
        // If we don't have an increment given, let's count by twos!
        if (!stepInput) stepInput = 2;        
        contentString += "<p>Here are the evn numbers between " + startInput + " and " + endInput + " by" + stepInput +"s" +":</p><ul>";
        for (i = startInput; i <= endInput; i += stepInput) {
          // If we are here, we have all three: start, end and increment
          if(i%2 === 0) {
            contentString += "<li>" + i + "</li>";
          }
          //contentString += "<li>" + i + "</li>";
        }
        contentString += "</ul>";
        // We've finished formatting the string, 
        //  let's output it to the proper div.
        //  Note that I'm using innerHTML, 
        //   document.writeln is considered bad.
        
        displayButton.innerHTML = contentString;
        //dont't miss this return otherwise your imput value will be NaN
        return false;
      }
    }
 

validate();
