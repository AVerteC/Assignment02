document.write("Comparing Two Integers:<br>");
let a = prompt("Enter the first integer:");
let b = prompt("Enter the second integer:");

 
if ((isNaN(a) || isNaN(b))) {
    document.write("Please enter valid integers.<br>");
}
// According to JavaScript, 5.0 is an integer
else if(Number.isInteger(parseFloat(a)) === false || Number.isInteger(parseFloat(b)) === false) {
    document.write("Please enter valid integers.<br>");
}
// 10.000001 will become 10 when converted to an integer.
// Don't allow 10.0000001 to be considered an integer.
// floor(10.000001) !== 10.000000 
else if (Math.floor(parseFloat(a)) !== parseFloat(a) || Math.floor(parseFloat(b)) !== parseFloat(b)) {
    document.write("Please enter valid integers.<br>");
}
else if (parseInt(a) > parseInt(b)) {
    document.write(`${a} is the largest integer that was entered.<br>`);
}
else if (parseInt(a) < parseInt(b)) {
    document.write(`${b} is the largest integer that was entered.<br>`);
}
else {
    document.write(`The two integers you have input are equal.<br>`);
}