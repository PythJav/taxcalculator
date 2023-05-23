const salary = document.getElementById("salary");
const tax = document.getElementById("yourTax");
const healthDe = document.getElementById("healthDe");
const healthInc = document.getElementById("healthInc");
const ptkp = document.getElementById("ptkp");
const ptkpVal = document.getElementById("ptkpList");




function calcTax(){
    document.getElementById("calc").style.display = "block";
    const realSal = salary.value;
    let taxCalc= (parseFloat(salary.value*0.15));
    let healthDeCalc= Math.min(95596,(salary.value*0.01));
    let healthIncCalc= Math.min(480000,(salary.value*0.04));
    healthDe.innerHTML=healthDeCalc.toLocaleString('en-US');
    ptkp.innerHTML=ptkpVal.value.toLocaleString('en-US');
    calc21(realSal);
    // tax.innerHTML=taxCalc.toLocaleString('en-US');
    healthInc.innerHTML=healthIncCalc.toLocaleString('en-US');


}
const brackets = [ 
    { rate: 0.05, maxAmount: 60000000    },
    { rate: 0.15, maxAmount: 250000000    },
    { rate: 0.25, maxAmount: 500000000    },
    { rate: 0.30, maxAmount: 5000000000    },
    { rate: 0.35, maxAmount: Infinity    },
  ];


function calc21(income){
    let incomeTax = 0;
    for (let i = 0; i < brackets.length; i++){
      if (income > brackets[i].maxAmount){
        incomeTax += (60000000 * brackets[i].rate);
      } else {
        incomeTax += ((income - brackets[i-1].maxAmount)*brackets[i].rate);
        i = brackets.length;
      }
    }
    tax.innerHTML=incomeTax.toLocaleString('en-US'); 
}

let cell = document.createElement("div");
container.appendChild(cell).className = "grid-item";