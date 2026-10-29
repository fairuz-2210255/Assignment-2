function calculateDiscount() {
  let name = document.getElementById("name").value;
  let fees = Number(document.getElementById("fees").value);
  let birthYear = Number(document.getElementById("year").value);

  let age = 2026 - birthYear;
  let percent;

  if (fees > 50000 && age > 21) {
    percent = 15;
  } else if (fees > 40000 && age > 20) {
    percent = 10;
  } else if (fees > 30000 && age > 19) {
    percent = 5;
  } else {
    percent = 2;
  }

  let discount = fees * percent / 100;
  let payable = fees - discount;

  console.log("Name: " + name);
  console.log("Discount amount: " + discount);
  console.log(name + ", your payable tuition fees is: " + payable);
}