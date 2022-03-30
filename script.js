// This function will be called when the 'calcuate interest' button is clicked in the HTML file
function compute()
{
    var principal = document.getElementById("principal").value; 
    //Make sure that something was entered in the box before calculation is allowed
    if (principal == "") {
        window.alert("Please Enter a positive number"); // message to user to correct
        document.getElementById("principal").focus(); // set focus
        return;
    }
    if (parseFloat(principal) <= 0) {    //principal is a string type, convert before check if the user has input a positive number
        window.alert("Please Enter a positive number"); // message to user to correct
        document.getElementById("principal").value = ''; // clear the incorrect number
        document.getElementById("principal").focus(); // set focus
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // calculate interest, convert interest to float as its a string type
    var interest = years * principal * (parseFloat(rate) / 100);
    // Date with paremeters defaults to todays date
    var year = new Date().getFullYear() + parseInt(years);
    // construct HTML output string
    document.getElementById("result").innerHTML = "<br /><br />" +
        "If you deposit " + "<mark>" + principal + "</mark>"+ "," + "<br />" +
        "at an interest rate of " + "<mark>" + rate + "</mark>" + "%." + "\<br />" +
        "you will receive an amount of " + "<mark>" + interest + "</mark>"+ "," + "<br />" +
        "in the year " + "<mark>" + year + "</mark>" + "." + "<br />";
}
// This funciton will be called when the rate slider is moved in the HTML file
// It sets the number next to the slider to the current value of the slider.
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        