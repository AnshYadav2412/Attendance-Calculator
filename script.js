const attended = document.querySelector("#attended input");
const passed = document.querySelector("#passed input");
const calcBtn = document.querySelector("#calcBtn");
const percentageTxt = document.querySelector("#percent");
const classesNeeded = document.querySelector("#classes-needed");

let percentage = 0;
let canMiss = 0;
let toAttend = 0;

const calculateResult = () => {
  let attdNum = attended.value;
  let psdNum = passed.value;

  percentage = (attdNum / psdNum) * 100;
  percentage = Math.round(percentage);

  toAttend = 3 * psdNum - 4 * attdNum;
};

const updateResult = () => {
  percentageTxt.innerText = percentage.toString() + "%";

  if (percentage >= 75) {
    percentageTxt.style.color = "green";
    classesNeeded.style.color = "green";
    classesNeeded.innerText = "Attendance is Above 75%";
  } else {
    percentageTxt.style.color = "red";
    classesNeeded.innerText = toAttend.toString() + " cont. classes needed";
  }
};

calcBtn.addEventListener("click", () => {
  calculateResult();
  updateResult();
});
