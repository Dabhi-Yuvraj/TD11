// Static values
let P = 40000;
let r = 10;
let n = 1;
let t = 3;

// Calculate Amount
let A = P * Math.pow((1 + (r / 100) / n), n * t);

// Calculate Compound Interest
let CI = A - P;

// Display in Console
console.log("Principal Amount: " + P);
console.log("Rate of Interest: " + r + "%");
console.log("Time: " + t + " Years");
console.log("Total Amount: " + A.toFixed(2));
console.log("Compound Interest: " + CI.toFixed(2));