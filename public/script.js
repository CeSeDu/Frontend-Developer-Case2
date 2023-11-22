document.addEventListener("DOMContentLoaded", function () {
  const haberListesiDiv = document.getElementById('haberListesi');
  const haberListesiAsideDiv = document.getElementById('haberListesiAside');
  const haberListesi2 = document.getElementById('haberListesi2');

  // JSON dosyasını almak için fetch kullanılır
  fetch('../services/mock.json')
    .then(response => response.json())
    .then(haberler => {
      haberler.forEach(haber => {
        const haberDiv = haberKutusuIcerigiOlustur(haber.title, haber.content, haber.date, haber.img, `detay.html?id=${haber.id}`);
        
        haberListesiDiv.appendChild(haberDiv);
        haberListesiAsideDiv.appendChild(haberDiv.cloneNode(true));
        haberListesi2.appendChild(haberDiv.cloneNode(true));
      });
    })
    .catch(error => console.error('Veri alınamadı:', error));
});

function haberKutusuIcerigiOlustur(baslik, icerik, tarih, resimURL, detayLink) {
  var haberDiv = document.createElement('a');
  haberDiv.classList.add('haberKutusu'); // CSS sınıfını ekleyin

  // Haber detaylarına yönlendirecek link
  haberDiv.href = detayLink;

  haberDiv.innerHTML = `
    <h3>${baslik}</h3>
    <img src="${resimURL}" alt="${baslik} Resmi">
    <p>${icerik}</p>
    <p><strong>Haber Tarihi:</strong> ${tarih}</p>
    <hr>
  `;

  return haberDiv;
}