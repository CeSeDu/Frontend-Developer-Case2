// detayScript.js
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const haberId = params.get('id');
  
    if (haberId) {
      // Simüle edilmiş haber detayları (mock verisi)
      const mockHaber = {
        "id": haberId,
        "title": "Bilim ve Teknoloji Haberi",
        "content": "Yapay zeka alanında yeni bir keşif yapıldı. Bilim insanları, makine öğrenmesi algoritmalarını daha da geliştirmek için çalışıyor.",
        "img": "https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg",
        "date": "2023-11-21"
      };
  
      // Detay sayfasını güncelle
      document.getElementById('baslik').innerText = mockHaber.title;
      document.getElementById('detay-img').src = mockHaber.img;
      document.getElementById('detay-icerik').innerText = mockHaber.content;
      document.getElementById('detay-tarih').innerText = mockHaber.date;
  
      // İçeriği paylaş butonunu ekle
      const paylasButton = document.getElementById('paylas-button');
      paylasButton.addEventListener('click', function () {
        paylas(mockHaber);
      });
    } else {
      // Eğer haberId parametresi yoksa, hata mesajını göster
      const hataMesaji = document.createElement('p');
      hataMesaji.innerText = 'Haber bulunamadı.';
      document.getElementById('detay').appendChild(hataMesaji);
    }
  });
  
  // İçeriği paylaş fonksiyonu
  function paylas(haber) {
    const paylasText = `#${haber.title} - ${haber.content} (Haber Tarihi: ${haber.date})`;
    // İlgili sosyal medya paylaşma işlemleri burada gerçekleştirilebilir.
    console.log(paylasText);
    alert('İçerik paylaşıldı!');
  }
  