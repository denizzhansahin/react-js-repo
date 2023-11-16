const urunler = [
    {id:1,name:"Kalem",fiyat:5},
    {id:2,name:"Defter",fiyat:10},
    {id:3,name:"Silgi",fiyat:2},
    {id:4,name:"Kalemtraş",fiyat:7},
];

urunler.find((urun) => {
    return urun.fiyat > 5;
});

urunler.find((urun)=> urun.fiyat>5);
console.log(urunler.find((urun)=> urun.fiyat>5));

urunler.some((urun)=>{
    return urun.fiyat<2
});

console.log("Find : ",urunler.find((urun)=> urun.fiyat>5));
console.log("Some : ",urunler.some((urun)=> urun.fiyat<2));
console.log("Some : ",urunler.some((urun)=> urun.fiyat<=2));

urunler.every((urun)=> urun.fiyat>1);

console.log("Every : ",urunler.every((urun)=> urun.fiyat>1));