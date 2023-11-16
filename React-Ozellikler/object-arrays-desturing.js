const kullanici = {isim : "Mehmet", yas: 35, adres:'Istanbul',
memleket:"Sakarya",meslek:"Ogrenci"};

const {isim,yas} = kullanici;

console.log(isim);
console.log(yas);


const {isim1, ...kalanlar} = kullanici;
//rest / spred demektir ... , geriye kalanları tek bir yere aktar
console.log(kalanlar);
console.log(isim1);

function kullaniciGoster({isim,yas}){
    return `${isim} isimli kullanici ${yas} yaşındadır.`;
}


const sayilar = [1,2,3,4,5];
const [bir,iki,uc,dort,bes] = sayilar;
console.log(bir,iki,uc,dort,bes);

const [birinciEleman, ...kalanElemanlar] = sayilar;
console.log(birinciEleman);