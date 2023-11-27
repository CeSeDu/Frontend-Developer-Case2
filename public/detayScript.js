document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const haberId = params.get('id');

  if (haberId) {
    // JSON dosyasından verileri al
    fetch('../services/mockData.json')
      .then(response => response.json())
      .then(mockVeri => {
        const mockHaber = mockVeri.find(haber => haber.id == haberId);

        if (mockHaber) {
          // Detay sayfasını güncelle
          document.getElementById('baslik').innerText = mockHaber.title;
          document.getElementById('detay-img').src = mockHaber.img;
          document.getElementById('detay-icerik').innerText = mockHaber.content || 'Haber içeriği bulunamadı.';
          document.getElementById('detay-tarih').innerText = mockHaber.date;

          // İçeriği paylaş butonunu ekle
          const paylasButton = document.getElementById('paylas-button');
          paylasButton.addEventListener('click', function () {
            paylas(mockHaber);
          });
        } else {
          // Eğer haberId'ye uygun haber bulunamazsa, hata mesajını göster
          const hataMesaji = document.createElement('p');
          hataMesaji.innerText = 'Haber bulunamadı.';
          document.getElementById('detay').appendChild(hataMesaji);
        }
      })
      .catch(error => {
        // JSON verileri alınırken bir hata olursa, hata mesajını göster
        console.error('Veri alınamadı veya işlenirken bir hata oluştu:', error);
        const hataMesaji = document.createElement('p');
        hataMesaji.innerText = 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
        document.getElementById('detay').appendChild(hataMesaji);
      });
  } else {
    // Eğer haberId parametresi yoksa, hata mesajını göster
    const hataMesaji = document.createElement('p');
    hataMesaji.innerText = 'Haber bulunamadı.';
    document.getElementById('detay').appendChild(hataMesaji);
  }
});
