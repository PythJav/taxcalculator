const salary = document.getElementById("salary");
const tax = document.getElementById("yearTax");
const monthTax = document.getElementById("monthTax");
const healthDe = document.getElementById("healthDe");
const healthInc = document.getElementById("healthInc");
const kecVal = document.getElementById("kecVal");
const kemVal = document.getElementById("kemVal");
const grossInc = document.getElementById("grossInc");
const occDe = document.getElementById("occDe");
const harDe = document.getElementById("harDe");
const penDe = document.getElementById("penDe");
const monthDiv = document.getElementById("monthDiv");
const yearDiv = document.getElementById("yearDiv");
const roundyearDiv = document.getElementById("roundyearDiv");




const ptkp = document.getElementById("ptkp");
const ptkpVal = document.getElementById("ptkpList");
const sMonth = document.getElementById("sMonth");
const eMonth = document.getElementById("eMonth");
const calcmWork = document.getElementById("calcmWork");

let healthDeCalc;
let healthIncCalc;
let bpjsKec;
let bpjsKem;
let grossTot;
let occTot;
let penTot;
let monthTot;
let harTot;
let taxyearTot;
let mWorked;
let roundYear;
let taxmonthTot;


function calcTax(){
  findPtkp();
  calcMonth();
  
    document.getElementById("calc").style.display = "block";
    const realSal = salary.value;
    findPtkp();
    
    calcMonth();
    let taxCalc= (parseFloat(salary.value*0.15));
    
    
    bpjsHealth();
    bpjsTk();
    grossIncCalc();
    occCost();
    penCost();
    harCost();
    monthCost();
    yearCost();
    roundDown();
    taxYear(roundYear);
    taxMonth();
    
    // tax.innerText=taxCalc.toLocaleString('en-US');
    


}
function bpjsHealth(){
   healthDeCalc= Math.min(120000,(salary.value*0.01));
  healthDe.innerText=healthDeCalc.toLocaleString('en-US');
   healthIncCalc= Math.min(480000,(salary.value*0.04));
  healthInc.innerText=healthIncCalc.toLocaleString('en-US');
  
}
function bpjsTk(){
   bpjsKec = salary.value*0.24;
  kecVal.innerText=bpjsKec.toLocaleString('en-US');
   bpjsKem= salary.value*0.3;
  kemVal.innerText=bpjsKem.toLocaleString('en-US');


}

function grossIncCalc(){
  grossTot= parseInt(salary.value)+parseInt(healthIncCalc)+parseInt(bpjsKec)+parseInt(bpjsKem);
  grossInc.innerText=grossTot.toLocaleString('en-US');
}

function occCost(){
  occTot = Math.min(500000,(salary.value*0.05));
  occDe.innerText=occTot.toLocaleString('en-US');

}
function harCost(){
  harTot= (salary.value)*0.02;
  harDe.innerText=harTot.toLocaleString('en-US');

}

function penCost(){
  penTot = Math.min(95596,(salary.value*0.01));
  penDe.innerText=penTot.toLocaleString('en-US');
}

function monthCost(){
  monthTot = grossTot-occTot-harTot-penTot;
  monthDiv.innerText=monthTot.toLocaleString('en-US');
}

function yearCost(){
  yearTot= monthTot*mWorked;
  yearDiv.innerText=yearTot.toLocaleString('en-US');

}

function roundDown(){
  roundYear= yearTot - yearTot % 1000;
  roundyearDiv.innerText=roundYear.toLocaleString('en-US');
}


function findPtkp(){
  ptkp.innerText=parseInt(ptkpVal.value).toLocaleString('en-US');


}
function calcMonth(){
 
  mWorked = eMonth.value-sMonth.value;
  calcmWork.innerText=mWorked;
  
  

}
function taxYear (amount) {
  if (amount <= 60000000) {
    taxyearTot= amount * 0.05;
  }
  else if (amount <= 250000000) {
    taxyearTot= (amount - 60000000) * 0.15 + 3000000;
  }
  else if (amount <= 500000000) {
    taxyearTot= (amount - 250000000) * 0.25 +   31500000  ;
  }
  else if (amount <= 5000000000) {
    taxyearTot= (amount - 500000000) * 0.3 +   94000000  ;
  }
  else {
    taxyearTot= (amount - 5000000000) * 0.35 +  1819000000 ;
  }
      tax.innerText=taxyearTot.toLocaleString('en-US'); 

};

function taxMonth(){
  taxmonthTot= taxyearTot/ mWorked;
  monthTax.innerText=taxmonthTot.toLocaleString('en-US'); 


  

}
// More advanced but could not find the solution
// const brackets = [ 
//     { rate: 0.05, maxAmount: 60000000    },
//     { rate: 0.15, maxAmount: 250000000    },
//     { rate: 0.25, maxAmount: 500000000    },
//     { rate: 0.30, maxAmount: 5000000000    },
//     { rate: 0.35, maxAmount: Infinity    },
//   ];

// function taxYear(income){
//     let incomeTax = 0;
//     for (let i = 0; i < brackets.length; i++){
//       if (income > brackets[i].maxAmount){
//         incomeTax += (60000000 * brackets[i].rate);
//       } else {
//         incomeTax += ((income - brackets[i-1].maxAmount)*brackets[i].rate);
//         i = brackets.length;
//       }
//     }
//     tax.innerText=incomeTax.toLocaleString('en-US'); 
// }

let cell = document.createElement("div");
container.appendChild(cell).className = "grid-item";