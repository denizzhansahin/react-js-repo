const urunler = [
    {id:1,name:"Kalem",fiyat:5},
    {id:2,name:"Defter",fiyat:10},
    {id:3,name:"Silgi",fiyat:2},
    {id:4,name:"Kalemtraş",fiyat:7},
];


const toplamUrun = urunler.reduce((toplam,urun) => toplam = toplam + urun.fiyat,0);
console.log({toplamUrun});

const toplamString = urunler.reduce((toplam,urun) => toplam = toplam + urun.name,`Urun isimleri: `);
console.log(toplamString);

const toplamString2= urunler.reduce((
    toplam,urun) => 
    (toplam = `${toplam} + ${urun.name}`),`Urun isimleri: `);
console.log(toplamString2);

const toplamDizi = urunler.reduce((toplam,urun)=>
toplam = [...toplam, urun.name],[]);
console.log(toplamDizi)

const toplamDizi2 = urunler.map((urun)=>urun.name);
console.log({toplamDizi2});


const toplamDizi3 = urunler.map((urun)=> `${urun.name} ${urun.fiyat} TL`);
console.log({toplamDizi3});