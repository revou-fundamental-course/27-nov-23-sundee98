function hitungLuasDanKeliling() {
    // Ambil nilai input dari elemen HTML
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);
    var sisiA = parseFloat(document.getElementById('sisiA').value);
    var sisiB = parseFloat(document.getElementById('sisiB').value);
    var sisiC = parseFloat(document.getElementById('sisiC').value);

    // Hitung luas dan keliling
    var luas = 0.5 * alas * tinggi;
    var keliling = sisiA + sisiB + sisiC;
console.log(luas)
console.log(keliling)
     // Tampilkan hasil pada elemen HTML
    document.getElementById('hasilLuas').innerHTML = "Luas segitiga: " + luas;
    document.getElementById('hasilKeliling').innerHTML = "Keliling segitiga: " + keliling;
        }
