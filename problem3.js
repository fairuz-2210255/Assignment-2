function findMax() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let c = Number(document.getElementById("num3").value);

  if (a >= b && a >= c) {
    console.log("The greatest number is: " + a);
  } else if (b >= a && b >= c) {
    console.log("The greatest number is: " + b);
  } else {
    console.log("The greatest number is: " + c);
  }
}