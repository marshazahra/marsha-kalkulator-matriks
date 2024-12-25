document.getElementById("calculate").addEventListener("click", function () {
  // Ambil nilai Matriks A
  const a11 = parseFloat(document.getElementById("a11").value) || 0;
  const a12 = parseFloat(document.getElementById("a12").value) || 0;
  const a21 = parseFloat(document.getElementById("a21").value) || 0;
  const a22 = parseFloat(document.getElementById("a22").value) || 0;

  // Ambil nilai Matriks B
  const b11 = parseFloat(document.getElementById("b11").value) || 0;
  const b12 = parseFloat(document.getElementById("b12").value) || 0;
  const b21 = parseFloat(document.getElementById("b21").value) || 0;
  const b22 = parseFloat(document.getElementById("b22").value) || 0;

  // Ambil operasi yang dipilih
  const operation = document.getElementById("operation").value;

  // Variabel untuk hasil
  let result11, result12, result21, result22;

  // Hitung operasi
  if (operation === "+") {
    result11 = a11 + b11;
    result12 = a12 + b12;
    result21 = a21 + b21;
    result22 = a22 + b22;
  } else if (operation === "-") {
    result11 = a11 - b11;
    result12 = a12 - b12;
    result21 = a21 - b21;
    result22 = a22 - b22;
  } else if (operation === "*") {
    result11 = a11 * b11 + a12 * b21;
    result12 = a11 * b12 + a12 * b22;
    result21 = a21 * b11 + a22 * b21;
    result22 = a21 * b12 + a22 * b22;
  } else {
    alert("Operasi tidak valid");
    return;
  }

  // Tampilkan hasil
  document.getElementById("result11").textContent = result11.toFixed(2);
  document.getElementById("result12").textContent = result12.toFixed(2);
  document.getElementById("result21").textContent = result21.toFixed(2);
  document.getElementById("result22").textContent = result22.toFixed(2);
});
