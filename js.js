var sum = document.getElementById("sum");
var showSum = document.getElementById("show-sum");
showSum.innerHTML = sum.value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ') + " тнг.";

sum.addEventListener("mousedown", tag1Vision);
sum.addEventListener("mouseup", tag1nonVision);

var term = document.getElementById("term");
var showTerm = document.getElementById("show-term");
showTerm.innerHTML = term.value + " месяца";

term.addEventListener("mousedown", tag2Vision);
term.addEventListener("mouseup", tag2nonVision);

var showSum2 = document.getElementById("show-sum2");
showSum2.innerHTML = sum.value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ') + " тнг.";

var showSumPlus = document.getElementById("show-sum-plus");
var gP = getProcent();
showSumPlus.innerHTML = gP.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ') + " тнг.";

var showTerm2 = document.getElementById("show-term2");
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + (+term.value);
var day = date.getDate();
renameMonth();
showTerm2.innerHTML = day + "." + month + "." + year;

var mp = document.getElementById("mp");
var gM = getMp();
mp.innerHTML = gM.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ') + " тнг.";

var tag1 = document.querySelectorAll('.tag')[0];
var tag2 = document.querySelectorAll('.tag')[1];

//working oninput
function getSum() {
    showSum.innerHTML = sum.value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ') + " тнг.";
    
    month = remonth();
    year = chengeYear();
    renameMonth();
    if(term.value == 12) {
        showTerm.innerHTML = "1 год";
    }else if(term.value == 3 || term.value == 4) {
        showTerm.innerHTML = term.value + " месяца";
    }else {
        showTerm.innerHTML = term.value + " месяцев";
    }
    
    showSum2.innerHTML = sum.value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ') + " тнг.";
    
    gP = getProcent();
    showSumPlus.innerHTML = gP.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ') + " тнг.";
    
    showTerm2.innerHTML = day + "." + month + "." + year;
    
    gM = getMp();
    mp.innerHTML = gM.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ') + " тнг.";
   
}

//change month
function remonth() {
    var date = new Date();
    date.setMonth(date.getMonth() + (+term.value));
    return date.getMonth();
}
    
function renameMonth() {
    switch (month)
{
  case 0: month = "01"; break;
  case 1: month = "02"; break;
  case 2: month = "03"; break;
  case 3: month = "04"; break;
  case 4: month = "05"; break;
  case 5: month = "06"; break;
  case 6: month = "07"; break;
  case 7: month = "08"; break;
  case 8: month = "09"; break;
  case 9: month = "10"; break;
  case 10: month = "11"; break;
  case 11: month = "12"; break;
}
}

function chengeYear() {
    var date = new Date();
    date.setMonth(date.getMonth() + (+term.value));
    return date.getFullYear();
}

function getProcent() {
    var procent = (Math.round((Math.round(sum.value / 100 * 36.5 / 12 * term.value + (+sum.value))) / 100)) * 100;
    return procent;
}
//montly payment
function getMp() {
    var showMp = Math.round(getProcent()/term.value);
    return showMp;
}

function tag1Vision() {
    tag1.style.display="block";   
}

function tag1nonVision() {
    tag1.style.display="none";   
}

function tag2Vision() {
    tag2.style.display="block";
}

function tag2nonVision() {
    tag2.style.display="none";
}



