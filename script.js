const salary = document.getElementById("salary");
const tax = document.getElementById("yourTax");
const health = document.getElementById("health");


function calcTax(){
    let taxCalc= (parseFloat(salary.value*0.15));
    let healthCalc= Math.min(95596,(salary.value*0.01));
    health.innerHTML=healthCalc;
    tax.innerHTML=taxCalc;


}


let cell = document.createElement("div");
container.appendChild(cell).className = "grid-item";