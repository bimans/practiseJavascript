  
var url = "https://api.exchangeratesapi.io/latest?base="
/*
function convert(){
    var base = document.getElementById('base').value;
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`,{method:'GET'})
    .then((response) => response.json())
    .then((data) => {
        var final = data.rates[out]
        var result = `Converted value of ${amount} ${base} is ${final} ${out}`
        document.getElementById('output').innerText = result
    })
}*/

//aSYNCH AWAIT IN ES6

async function convert(){
    var base = document.getElementById("base").value;
var out = document.getElementById("out").value;
var amount=document.getElementById("amount").value;

let response=await fetch(` ${url}${base}`,{method:'GET'})
let data=await response.json();
var final=data.rates[out]*amount

var result=`conberted value of ${amount} ${base} is ${final} ${out}`
document.getElementById("output").innerText=result;



}
