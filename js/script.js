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

// Function to Calculate the factorial of a number n
function factorial(n) {
    return n<=1 ? 1 : n * factorial(n-1);
}

// Function to Calculate the number of combinations
function combinations(n,r) {
    return factorial(n)/(factorial(r) * factorial(n-r));
}

/*
    Function to calculate the number of values of nCr, for 1 ≤ n ≤ 100, are
    greater than the limit
    combinatoricSelections(1000)    returns 4626
    combinatoricSelections(10000)   returns 4431
    combinatoricSelections(100000)  returns 4255
    combinatoricSelections(1000000) returns 4075
*/
function combinatoricSelections(limit) {
    let total = 0;
    for (let i=1;i<=100;i++) {
        for (let j=1;j<=i;j++) {
            if (combinations(i,j) > limit) total++;
        }
    }
    return total;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("limitinfo").innerHTML = txt;
}

   