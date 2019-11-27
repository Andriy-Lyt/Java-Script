//LAB 10-DATA STORAGE: INDEX PAGE
//alert("home");//DELETE AFTER CONFIRMING CONNECTION
window.onload = function () {
var formHandle = document.forms[0];
console.log(customerName);
//formHandle.onsubmit = processForm;


var customerName = document.forms[0].f_name.value;
console.log(customerName);
var customerColor = document.forms[0].f_color.value;
console.log(customerColor);

document.cookie = "name=customerName; color=customerColor";


}