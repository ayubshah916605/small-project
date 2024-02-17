
let result = document.getElementById("result");
let alertp = document.getElementById("alert");
function input(num) {
    //  let result = document.getElementById("result");
    result.value += num;
} 

function calc() {
    // let result = document.getElementById("result");
    let output = eval(result.value);
     result.value = output;
   
}

function cencel() {
    // let result = document.getElementById("result");
    result.value = "";
}

function even() {
let num = result.value;
if(num%2 == 0) 
{
 alertp.innerHTML = "Even Number"
 alertp.style.color = "dodgerblue";
 result.value = "";
 
}
else {
    alertp.innerHTML = "Not En Even Number"
    alertp.style.color = "red";
    result.value = "";
}
}
function odd() {
 let num = result.value;
 if(num%2 !== 0)
 {
   alertp.innerHTML = "Odd Number"
   alertp.style.color = "dodgerblue";
   result.value = "";
 }
else {
    alertp.innerHTML = "Not Odd Number"
    alertp.style.color = "red";
    result.value = "";
}

}