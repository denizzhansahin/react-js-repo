const urunler = [
    {id:1,name:"Kalem",fiyat:5},
    {id:2,name:"Defter",fiyat:10},
    {id:3,name:"Silgi",fiyat:2},
    {id:4,name:"Kalemtraş",fiyat:7},
];

urunler.map(urun => `${urun.name} fiyati ${urun.fiyat} liradır.`)

console.log(urunler.map(urun => `${urun.name} fiyati ${urun.fiyat} liradır.`));

const urunOlusturcu = (urun) => `${urun.name} fiyatı ${urun.fiyat} liradır.`;
console.log(urunler.map(urunOlusturcu));


function UrunGoster({urunListesi}){
    return urunListesi.map(urun => <li key={urun.id}>{urun.name} fiyatı {urun.fiyat} liradır.</li>)
}

function UrunGoster1({urunListesi}){
    return urunListesi.map((urun , index)=> <li key={index}>{urun.name} fiyatı {urun.fiyat} liradır.</li>)
}