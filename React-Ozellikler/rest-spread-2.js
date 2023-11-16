function topla(sayi1,sayi2,sayi3){
    return sayi1 + sayi2 + sayi3;
}

const sayilar = [1,2,3];
console.log(topla(sayilar));

console.log(topla.apply(null,sayilar));
console.log(topla(...sayilar));


const sayilar1 = [1,2,3];
const sayilar2 = [4,5,6];
const birlesmisDizi = [...sayilar1, ...sayilar2];
console.log(birlesmisDizi);

const kullanici = {isim:"Mehmet",yas:35};
const adres = {sehir : "İstanbul",semt : "Bakirköy"};
const birlesmisObje = {...kullanici, ...adres};
console.log(birlesmisObje);