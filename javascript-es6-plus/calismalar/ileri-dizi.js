const dizi = [1,2,3,4];

const kareDizisi = [];

dizi.forEach(sayi =>{
    console.log(sayi);
    kareDizisi.push(sayi*sayi);
})

console.log(kareDizisi);

//map
//yeni bir dizi ortaya çıkar
const mapDizi =  dizi.map(sayi=>{
    sayi * 3;
})

console.log(mapDizi)

const mapDizi1 =  dizi.map(sayi=>
    sayi * 3
)

console.log(mapDizi1);

//filter
//diziyi filtrele
const filtreliDizi = dizi.filter(sayi=>sayi>2)
console.log(filtreliDizi);

//reduce
//kümülatif toplama
const toplam = dizi.reduce((acc,sayi)=>{
    //acc nedir ? bütün sayıları accye göre topla , default olarak 0'dır
    return acc+sayi;
})

console.log(toplam);


const toplam1 = dizi.reduce((acc,sayi)=>{
    //acc nedir ? bütün sayıları accye göre topla , default olarak 0'dır
    return acc+sayi;
})

console.log(toplam1);