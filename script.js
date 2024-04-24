// This is the Button that will show the test results when clicked

document.getElementById("Test").addEventListener("click", showTestResults);
function showTestResults() {
  // These are my variables that shorten the code.
  let Q1 = document.getElementById("canada").value.toLowerCase();
  let Q2 = document.getElementById("states").value.toLowerCase();
  let Q3 = document.getElementById("philippines").value.toLowerCase();
  let Q4 = document.getElementById("niger").value.toLowerCase();
  let calculateGrade = 0;
  // These are my Variables that are the test answers!!
  if (Q1 === "red" || Q1 === "white") {
    document.getElementById("Qu1").style.color = "green";
    console.log("correct");
    calculateGrade = calculateGrade + 1;
    document.getElementById("result").innerHTML = calculateGrade;
  } else {
    document.getElementById("Qu1").style.color = "red";
    console.log("incorrect");
  }
  if (Q2 === "white" || Q2 === "red" || Q2 === "blue") {
    document.getElementById("Qu2").style.color = "green";
    console.log("correct");
    calculateGrade = calculateGrade + 1;
    document.getElementById("result").innerHTML = calculateGrade;
  } else {
    document.getElementById("Qu2").style.color = "red";
    console.log("incorrect");
  }
  if (Q3 === "red" || Q3 === "blue" || Q3 === "white" || Q3 === "yellow") {
    document.getElementById("Qu3").style.color = "green";
    console.log("correct");
    calculateGrade = calculateGrade + 1;
    document.getElementById("result").innerHTML = calculateGrade;
  } else {
    document.getElementById("Qu3").style.color = "red";
    console.log("incorrect");
  }
  if (Q4 === "white" || Q4 === "orange" || Q4 === "green") {
    document.getElementById("Qu4").style.color = "green";
    console.log("correct");
    calculateGrade = calculateGrade + 1;
    document.getElementById("result").innerHTML = calculateGrade;
  } else {
    document.getElementById("Qu4").style.color = "red";
    console.log("incorrect");
  }
  let percent = Math.round((calculateGrade / 4) * 100);
  document.getElementById("result").innerHTML = percent + "%";
  if (percent == 75) {
    document.getElementById("statement").innerHTML = "You did Great!";
  } else if (percent == 50) {
    document.getElementById("statement").innerHTML = "You did Okay!";
  } else if (percent == 25) {
    document.getElementById("statement").innerHTML = "You only got one right?!";
  } else if (percent == 0) {
    document.getElementById("statement").innerHTML = "Failure";
  } else if (percent == 100) {
    document.getElementById("statement").innerHTML = "100% good job";
  }
}
