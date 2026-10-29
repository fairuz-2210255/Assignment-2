function findGrade() {
  let mark = Number(document.getElementById("mark").value);
  let grade;

  if (mark >= 90) {
    grade = "A";
  } else if (mark >= 85) {
    grade = "A-";
  } else if (mark >= 80) {
    grade = "B+";
  } else if (mark >= 75) {
    grade = "B";
  } else if (mark >= 70) {
    grade = "B-";
  } else if (mark >= 65) {
    grade = "C+";
  } else if (mark >= 60) {
    grade = "C";
  } else if (mark >= 55) {
    grade = "C-";
  } else if (mark >= 50) {
    grade = "D+";
  } else if (mark >= 45) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log("Mark: " + mark);
  console.log("Grade: " + grade);
}