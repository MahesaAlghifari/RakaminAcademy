let pendaftar = [];

// Menangani submit form registrasi
document.getElementById("registrasi-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil nilai dari form
    const nama = document.getElementById("nama").value;
    const umur = parseInt(document.getElementById("umur").value);
    const uangSaku = parseInt(document.getElementById("uang-saku").value);

    // Validasi kriteria
    if (nama.length < 10 || umur < 25 || uangSaku < 100000 || uangSaku > 1000000) {
        alert("Mohon isi data dengan benar sesuai kriteria.");
        return;
    }

    // Tambahkan pendaftar ke dalam array
    pendaftar.push({ nama, umur, uangSaku });

    // Reset form
    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("uang-saku").value = "";

    // Hitung rata-rata umur dan uang saku
    const totalUmur = pendaftar.reduce((sum, p) => sum + p.umur, 0);
    const totalUangSaku = pendaftar.reduce((sum, p) => sum + p.uangSaku, 0);
    const rataUmur = totalUmur / pendaftar.length;
    const rataUangSaku = totalUangSaku / pendaftar.length;

    // Tampilkan rata-rata di tab List Pendaftar
    document.getElementById("rata-umur").textContent = rataUmur.toFixed(0);
    document.getElementById("rata-uang-saku").textContent = rataUangSaku.toFixed(0);

    // Tampilkan data pendaftar di tabel
    const tableBody = document.getElementById("list-pendaftar-body");
    tableBody.innerHTML = "";
    pendaftar.forEach((p) => {
        const row = tableBody.insertRow();
        row.innerHTML = `<td>${p.nama}</td><td>${p.umur}</td><td>${p.uangSaku}</td>`;
    });
});

    // Menambahkan event listener untuk tombol Reset
    document.getElementById("reset-button").addEventListener("click", function () {
    // Mengosongkan daftar pendaftar
    pendaftar = [];

    // Mereset tampilan tabel dan rata-rata
    document.getElementById("rata-umur").textContent = "";
    document.getElementById("rata-uang-saku").textContent = "";
    document.getElementById("list-pendaftar-body").innerHTML = "";
});
