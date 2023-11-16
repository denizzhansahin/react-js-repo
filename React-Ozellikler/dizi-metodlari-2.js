const isim = "Mehmet";
console.log(isim.includes("met"));
console.log(isim.includes("mehmet"));

const yeniIsim = isim.toLowerCase();
console.log(yeniIsim);


const isim1 = "MEHMET";
const kontrol = "Mehmet";
console.log(isim1.toLowerCase().includes("met"));
console.log(isim1.toLowerCase().includes("mehmet"));
console.log(isim1.toLowerCase().includes(kontrol));
console.log(isim1.toLowerCase().includes(kontrol.toLowerCase()));

console.log(isim1);

const urunler = [
    {id:1,name:"Kalem",fiyat:5},
    {id:2,name:"Defter",fiyat:10},
    {id:3,name:"Silgi",fiyat:2},
    {id:4,name:"Kalemtraş",fiyat:7},
];

console.log(urunler.filter(urun => urun.name.includes("Kalem")));
console.log(urunler.filter(urun => urun.name.includes("kalem")));
console.log(urunler.filter(urun => urun.name.toLowerCase().includes("kalem")));
const arama = "KALEM";
console.log(urunler.filter(urun => urun.name.toLowerCase().includes(arama)));
console.log(urunler.filter(urun => urun.name.toLowerCase().includes(arama.toLowerCase())));