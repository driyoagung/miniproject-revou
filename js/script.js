function calculate() {
  var sideLength = parseFloat(document.getElementById("sideLength").value);

  if (isNaN(sideLength) || sideLength <= 0) {
    alert("Masukkan panjang sisi yang valid.");
    return;
  }

  var area = sideLength * sideLength;
  var perimeter = 4 * sideLength;

  displayResult(area, perimeter);
}

function displayResult(area, perimeter) {
  var resultContainer = document.getElementById("resultContainer");
  var resultArea = document.getElementById("resultArea");

  resultArea.textContent = "Luas: " + area.toFixed(2) + ", Keliling: " + perimeter.toFixed(2);
  resultContainer.style.display = "block";
}
function reset() {
  var form = document.getElementById("calculatorForm");
  form.reset();

  // Sembunyikan hasil dan container hasil
  var resultContainer = document.getElementById("resultContainer");
  resultContainer.style.display = "none";

  // Reset nilai pada area hasil
  var resultArea = document.getElementById("resultArea");
  resultArea.textContent = "Hasil akan ditampilkan di sini.";
}
