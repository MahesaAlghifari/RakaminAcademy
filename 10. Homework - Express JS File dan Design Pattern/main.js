const formData = new FormData();
formData.append('photo', file); // 'file' adalah objek file yang ingin Anda kirim

fetch(`/uploads`, {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(data => {
  console.log(data); // Handle respons dari server di sini
})
.catch(error => {
  console.error(error);
});
