// Function to Get Limit (Number) Information, including invalid input
function getLimitInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mylimit").value;
    // Check if the input is valid
    if (isNaN(num) || num.length==0 || num<100 || num>1000000 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 100 and 1000000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the limit of ${num}. <p>`;
        txt += `Number of values of nCr, for 1 &le; n &le; 100, greater than ${num} is ${combinatoricSelections(num)}.`
    }

    // Display Information in the Browser
    document.getElementById("limitinfo").innerHTML = txt;
}