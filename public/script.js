document.addEventListener("DOMContentLoaded", function () {
  const haberListesiDiv = document.getElementById('haberListesi');
  const haberListesiAsideDiv = document.getElementById('haberListesiAside');
  const haberListesi2 = document.getElementById('haberListesi2');
  const haberListesi3 = document.getElementById('haberListesi3');

  // JSON dosyasını almak için fetch kullanılır
  fetch('../services/mock.json')
  .then(response => response.json())
  .then(haberler => {
    const maxHaberListesi1 = 12;
    const maxHaberListesi2 = 16;
    const maxHaberListesi3 = 24;
    const maxHaberListesi4 = 9;

    haberler.slice(0, maxHaberListesi1).forEach(haber => {
      const haberDiv = haberKutusuIcerigiOlustur(haber.title, haber.content, haber.date, haber.img, `detay.html?id=${haber.id}`);
      haberListesiDiv.appendChild(haberDiv);
    });

    haberler.slice(0, maxHaberListesi2).forEach(haber => {
      const haberDiv = haberKutusuIcerigiOlustur(haber.title, haber.content, haber.date, haber.img, `detay.html?id=${haber.id}`);
      haberListesiAsideDiv.appendChild(haberDiv.cloneNode(true));
    });

    haberler.slice(0, maxHaberListesi3).forEach(haber => {
      const haberDiv = haberKutusuIcerigiOlustur(haber.title, haber.content, haber.date, haber.img, `detay.html?id=${haber.id}`);
      haberListesi2.appendChild(haberDiv.cloneNode(true));
    });

    haberler.slice(0, maxHaberListesi4).forEach(haber => {
      const haberDiv = haberKutusuIcerigiOlustur4(haber.title, haber.img, haber.content, `detay.html?id=${haber.id}`);
      haberListesi3.appendChild(haberDiv.cloneNode(true));
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

function haberKutusuIcerigiOlustur4(baslik, resimURL, aciklama, detayLink) {
  var haberDiv = document.createElement('a');
  haberDiv.classList.add('haberKutusu'); // CSS sınıfını ekleyin

  // Haber detaylarına yönlendirecek link
  haberDiv.href = detayLink;

  haberDiv.innerHTML = `
    <h3>${baslik}</h3>
    <img src="${resimURL}" alt="${baslik} Resmi">
    <p>${aciklama}</p>
    <hr>
  `;

  return haberDiv;
}
