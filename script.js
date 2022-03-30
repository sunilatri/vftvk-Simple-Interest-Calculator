function compute()
{
    var principal = document.getElementById("principal").value;
//    if (Number.isInteger(principal) != true)
 //   {
 //       window.alert("Please Enter a valid number");
 //       document.getElementById("principal").focus();
 //       return;
 //   }
    if (parseFloat(principal) <= 0) {
        window.alert("Please Enter a positive number");
        document.getElementById("principal").value = '';
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = years * principal * (parseFloat(rate) / 100);
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseFloat(principal) + parseFloat(interest);
    document.getElementById("result").innerHTML = "<br /><br />" +
        "If you deposit " + "<mark>" + principal + "</mark>"+ "," + "<br />" +
        "at an interest rate of " + "<mark>" + rate + "</mark>" + "%." + "\<br />" +
        "you will receive an amount of " + "<mark>" + amount + "</mark>"+ "," + "<br />" +
        "in the year " + "<mark>" + year + "</mark>" + "." + "<br />";



}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;

}
        