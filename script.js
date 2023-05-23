const salary = document.getElementById("salary");
const tax = document.getElementById("yourTax");
const healthDe = document.getElementById("healthDe");
const healthInc = document.getElementById("healthInc");


function calcTax(){
    document.getElementById("calc").style.display = "block";
    let taxCalc= (parseFloat(salary.value*0.15));
    let healthDeCalc= Math.min(95596,(salary.value*0.01));
    let healthIncCalc= Math.min(480000,(salary.value*0.04));
    healthDe.innerHTML=healthDeCalc.toLocaleString('en-US');
    tax.innerHTML=taxCalc.toLocaleString('en-US');
    healthInc.innerHTML=healthIncCalc.toLocaleString('en-US');


}


let cell = document.createElement("div");
container.appendChild(cell).className = "grid-item";