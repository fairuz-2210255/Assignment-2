function findGreater() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  if (a > b) {
    console.log("The greater number is: " +a);

  } else if (b > a) {
    console.log("The greater number is: " + b);
  } else {
    console.log("Both numbers are equal: " + a);
  }
}