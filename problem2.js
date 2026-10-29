function checkVote() {
  let age = Number(document.getElementById("age").value);

  if (age >= 18) {
    console.log("You are eligible to cast your vote.");
  } else {
    console.log("You are not eligible to cast your vote.");
  }
}