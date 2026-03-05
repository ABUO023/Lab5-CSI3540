/**
 * Function to check if number matches Regex 
 * If Number is empty or invalid, an alert will be sent
 * If valid an sucess alert is displayed
 */

function CheckNumber() {

    const reg = /^(\(\d{3}\)|\d{3})[-/. ]?\d{3}[-/. ]?\d{4}$/;

    const regNum = /^[0-9()\-.\/ ]+$/;

    const num = document.getElementById("numberInput").value;

    console.log("Number entered:", num);

    if (num === ""){
        alert("No number was input")
    }

    if (regNum.test(num)){
        if (reg.test(num)) {
            alert("Valid Phone Number");
        } else {
            alert("Invalid Phone Number");
        }
    } else {
        alert("The input contains alphabets not only numbers and () . / - and <space>")
    }


}


/**
 * Helper function to go home
 */

function goHome(){
    window.location.href="../index.html";
}