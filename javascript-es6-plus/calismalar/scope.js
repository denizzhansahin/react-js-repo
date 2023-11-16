var sayi = 10;
var sehir = "Ankara";

sayi1 = 11;
sehir = "İstanbul";

var sehir = "Adana";
let il = "Ankara";
il = "Bursa";
//let il = "İzmir"; //tekrar tanımlanmayı önler

//console.log(sayi);
//console.log(sehir);
//console.log(il);

function mesajVer(){
    var isim = "Deniz";
    console.log(sehir);
    console.log(isim);

}

mesajVer()
//console.log(isim);

for(var i=1;i<10;i++){

}
console.log(i);

for(let i1=1;i1<10;i1++){

}
//console.log(i1);


const soyad = "Deniz";
//const soyad="deniz";
//soyad = "deniz";
console.log(soyad);


const sehirler = ["Ankara","İstanbul"];
sehirler.push("Deniz"); //değer referans ilişkisi var
//sehirler = ["Bursa","Mardin"];
console.log(sehirler);