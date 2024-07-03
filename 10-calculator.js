let calculation = JSON.parse(localStorage.getItem("calculation")) || 0;
document.querySelector(".js-calculation").innerHTML = `${calculation}`;
// console.log(localStorage.getItem(calculation));

console.log(calculation);
calculation = "";
function updateCalculation(value) {
  calculation += value;
  document.querySelector(".js-calculation").innerHTML = `${calculation}`;
  return calculation;
}

function totalNumber() {
  calculation = eval(calculation);
  document.querySelector(".js-calculation").innerHTML = `${calculation}`;
  // console.log(calculation);
  localStorage.setItem("calculation", JSON.stringify(calculation));
}

function clearAll() {
  calculation = 0;
  console.log("Cleared.");
  document.querySelector(
    ".js-calculation"
  ).innerHTML = `${localStorage.removeItem("calculation")}`;
  // localStorage.removeItem('calculation');
  if (!calculation) {
    document.querySelector(".js-calculation").innerHTML = "0";
  }
}
