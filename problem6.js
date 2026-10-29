function checkTemp() {
  let temp = Number(document.getElementById("temp").value);

  if (temp < 0) {
    console.log("Freezing weather");
  } else if (temp < 10) {
    console.log("Very Cold weather");
  } else if (temp < 20) {
    console.log("Cold weather");
  } else if (temp < 30) {
    console.log("Normal in Temp");
  } else if (temp < 40) {
    console.log("Its Hot");
  } else {
    console.log("Its Very Hot");
  }
}