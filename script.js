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
const pensionCheck = document.getElementById("pensionCheck");
const healthCheck = document.getElementById("healthCheck");
const tkCheck = document.getElementById("tkCheck");
const takeHome = document.getElementById("takeHome");
const incDiv = document.getElementById("incDiv");
const bonDiv = document.getElementById("bonus");






const ptkp = document.getElementById("ptkp");
const sType = document.getElementById("sType");

const ptkpVal = document.getElementById("ptkpList");
const sMonth = document.getElementById("sMonth");
const eMonth = document.getElementById("eMonth");
const calcmWork = document.getElementById("calcmWork");

let healthDeCalc = 0;
let healthIncCalc = 0;
let bpjsKec = 0;
let bpjsKem = 0;
let grossTot;
let occTot;
let penTot = 0;
let monthTot;
let harTot= 0;
let taxyearTot;
let mWorked;
let roundYear;
let taxmonthTot;
let takeTot;
let finTax;
let monthBon=0;
let salType=0;
let convSal=0;


function checkInput(){
  if(salary.value==0||!(/^\d+$/.test(salary.value))){
    alert("Input number");
  }
  else if(sMonth.value ==""){
    alert("Input starting month")

  }
  else if(eMonth.value ==""){
    alert("Input ending month")

  }
  else{
    
    calcTax();
    document.getElementById("calc").scrollIntoView();

  }  
  }

function calcTax(){
    document.getElementById("calc").style.display = "flex";
    findPtkp();
    calcMonth();

    findPtkp();
    resetBox();
    salTypeFind();
    checkBox();
    
    
    grossIncCalc();
    occCost();
    
    monthCost();
    // monthbonCost();
    yearCost();
    roundDown();
    taxInc();
    
    taxYear(finTax);
    taxMonth();
   
    takePay();
    
    // tax.innerText=taxCalc.toLocaleString('en-US');
    


}

function salTypeFind(){
 convSal=Math.floor(salary.value/sType.value);
}
function taxInc(){
  finTax= Math.max(0,roundYear-ptkpVal.value);
  incDiv.innerText= finTax.toLocaleString('en-US');
}
function bpjsHealth(){
   healthDeCalc= Math.floor(Math.min(120000,(convSal*0.01)));
  healthDe.innerText=healthDeCalc.toLocaleString('en-US');
   healthIncCalc= Math.floor(Math.min(480000,(convSal*0.04)));
  healthInc.innerText=healthIncCalc.toLocaleString('en-US');
  
}

function resetBox(){
  penDe.innerText=0;
  healthDe.innerText=0;
  healthInc.innerText=0;
  kecVal.innerText=0;
  kemVal.innerText=0;
  harDe.innerText=0;
  tax.innerText=0;
  monthTax.innerText=0;


}
function checkBox(){
  if(pensionCheck.checked== true){
    penCost();
  }
  if (healthCheck.checked==true){
    bpjsHealth();
  }
  if (tkCheck.checked==true){
    bpjsTk();

  }

  
}

function bpjsTk(){
   bpjsKec = Math.floor(convSal*0.0024);
  kecVal.innerText=bpjsKec.toLocaleString('en-US');
   bpjsKem= Math.floor(convSal*0.003);
  kemVal.innerText=bpjsKem.toLocaleString('en-US');
  harTot= Math.floor((convSal)*0.02);
  harDe.innerText=harTot.toLocaleString('en-US');


}

function grossIncCalc(){
  grossTot= parseInt(convSal)+parseInt(healthIncCalc)+parseInt(bpjsKec)+parseInt(bpjsKem);
  grossInc.innerText=grossTot.toLocaleString('en-US');
}

function occCost(){
  occTot = Math.floor(Math.min(500000,(grossTot*0.05)));
  occDe.innerText=occTot.toLocaleString('en-US');

}
// function harCost(){
//   harTot= (convSal)*0.02;
//   harDe.innerText=harTot.toLocaleString('en-US');

// }

function penCost(){
  penTot = Math.floor(Math.min(95596,(convSal*0.01)));
  penDe.innerText=penTot.toLocaleString('en-US');
}

function monthCost(){
  monthTot = grossTot-occTot-harTot-penTot;
  monthDiv.innerText=monthTot.toLocaleString('en-US');
}

// function monthbonCost(){
//   monthBon= monthTot+parseInt(bonDiv.value);
// }

function yearCost(){
  yearTot= monthTot*(mWorked);
  yearDiv.innerText=yearTot.toLocaleString('en-US');

}

function roundDown(){
  roundYear= yearTot - yearTot % 1000;
  roundyearDiv.innerText=roundYear.toLocaleString('en-US');
}

function takePay(){;
  console.log(convSal)
  takeTot=convSal -harTot-penTot-healthDeCalc-taxmonthTot;
  takeHome.innerText=takeTot.toLocaleString('en-US');
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
    taxyearTot= Math.floor(amount * 0.05);
  }
  else if (amount <= 250000000) {
    taxyearTot= Math.floor((amount - 60000000) * 0.15 + 3000000);
  }
  else if (amount <= 500000000) {
    taxyearTot= Math.floor((amount - 250000000) * 0.25 +   31500000  );
  }
  else if (amount <= 5000000000) {
    taxyearTot=Math.floor( (amount - 500000000) * 0.3 +   94000000 ) ;
  }
  else {
    taxyearTot= Math.floor((amount - 5000000000) * 0.35 +  1819000000 );
  }
      tax.innerText=taxyearTot.toLocaleString('en-US'); 

};

function taxMonth(){
  taxmonthTot= (Math.floor(taxyearTot/ mWorked))||0;
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