function oyunuBaslat(secim) {

let kullaniciSecimi = secim.id;
console.log(kullaniciSecimi)
let rastgeleSayi = Math.floor(Math.random()*3);
let bilgisayarSecimi = ["tas", "kagit", "makas"][rastgeleSayi];
console.log(bilgisayarSecimi)

//Puanlamaları dizi şeklinde değişkene aktaralım
let oyunPuanlamalari = {
    "tas":{"makas":1,"tas":0.5, "kagit":0},
    "kagit":{"makas":0, "tas":1, "kagit":0.5},
    "makas":{"makas":0.5, "tas":0, "kagit":1} 
}

let kullaniciPuani = oyunPuanlamalari[kullaniciSecimi][bilgisayarSecimi]
console.log(kullaniciPuani)

//Kayıtlı tüm resimlerin kaynak adreslerini alalım

let kayitliResimler = {
    "tas" : document.getElementById("tas").src,
    "kagit" : document.getElementById("kagit").src,
    "makas" : document.getElementById("makas").src
}

//TEMİZ BİR SONUÇ EKRANI İÇİN TÜM RESİMLERİ SİLELİM
document.getElementById("tas").remove();
document.getElementById("kagit").remove();
document.getElementById("makas").remove();

//SİLDİĞİMİZ NESNELERİN YERİNE SONUÇLAR İÇİN YENİ NESNELER OLUŞTURALIM
let kullaniciResmi = document.createElement('img')
let bilgisayarResmi = document.createElement('img')
let sonucMesaji = document.createElement('div')

//RESİM NESNELERİNE SEÇİMLERE GÖRE UYGUN KAYNAKLARI BAĞLAYALIM
kullaniciResmi.src = kayitliResimler[kullaniciSecimi]
bilgisayarResmi.src = kayitliResimler[bilgisayarSecimi]

//OLUŞTURDUĞUMUZ NESNELERİ KAPSAYICISI ALLTINA MONTE EDELİM
document.getElementById("container").appendChild(kullaniciResmi)
document.getElementById("container").appendChild(sonucMesaji)
document.getElementById("container").appendChild(bilgisayarResmi)


//PUANA BAKARAK ŞART KONTROLÜYLE SONUCU YAZDIRALIM
 if (kullaniciPuani == 0) {
    sonucMesaji.innerHTML = "Maalesef Kaybettiniz 🥹"
    sonucMesaji.style.color = "red" 
    sonucMesaji.style.fontSize = "2rem"
    
 } else if(kullaniciPuani == 0.5){
    sonucMesaji.innerHTML = "Sonuç Berabere"
    sonucMesaji.style.color = "blue"
    sonucMesaji.style.fontSize = "2rem"
 } else {
    sonucMesaji.innerHTML = "Tebrikler Kazandınız 🎉🥳"
    sonucMesaji.style.color = "green"
    sonucMesaji.style.fontSize = "2rem"
 }



















}










