//Template literals - şablon dizileri

const isim = "Mehmet";
const mesaj = `Merhaba, ${isim}`;
console.log(mesaj);

const birim_fiyat = 100;
const adet = 3;
const para_birimi = "TL";
const toplam_tutar_degeri = `Toplam : ${birim_fiyat * adet} ${para_birimi}`;
console.log(toplam_tutar_degeri);