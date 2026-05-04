// Sekme değiştirme fonksiyonu
function openTab(tabName) {
    // Tüm sekme içeriklerini gizle
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Tüm sekme butonlarından 'active' sınıfını kaldır
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Tıklanan sekmeyi ve butonunu aktif yap
    document.getElementById(tabName).classList.add('active');
    
    // Tıklanan butonu bul ve aktif et
    const clickedBtn = Array.from(buttons).find(btn => 
        btn.getAttribute('onclick').includes(tabName)
    );
    if(clickedBtn) clickedBtn.classList.add('active');
}

// İleride algoritmaları bağlayacağımız event listener'lar
document.getElementById('btn-huffman').addEventListener('click', () => {
    const inputText = document.getElementById('huffman-input').value;
    if(!inputText) {
        alert("Lütfen önce bir metin girin!");
        return;
    }
    console.log("Huffman algoritması çalıştırılacak. Metin:", inputText);
    // TODO: Huffman mantığı ve ağaç çizimi buraya gelecek
});

document.getElementById('btn-lzw').addEventListener('click', () => {
    const inputText = document.getElementById('lzw-input').value;
    if(!inputText) {
        alert("Lütfen önce bir metin girin!");
        return;
    }
    console.log("LZW algoritması çalıştırılacak. Metin:", inputText);
    // TODO: LZW mantığı ve sözlük tablosu buraya gelecek
});