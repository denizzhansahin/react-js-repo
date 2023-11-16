const kopruDurumu = "kapali";
kopruDurumu === "acik" ? console.log("Kopru Acik") : console.log("Kopru kapali");


const kopruDurumu1 = "tadilat var";
kopruDurumu1 === "acik" ? 
console.log("Kopru Acik") : 
kopruDurumu1==="kapali"?
console.log("Kopru kapali") : 
console.log("Koprunun durumu bilinmiyor");


var sayi = 1;
sayi?console.log("sayi gecerli") : console.log("sayi gecersiz");

var sayi = "";
sayi?console.log("sayi gecerli") : console.log("sayi gecersiz");

var sayi = -1;
sayi?console.log("sayi gecerli") : console.log("sayi gecersiz");

var sayi = null;
sayi?console.log("sayi gecerli") : console.log("sayi gecersiz");

var sayi = 0;
sayi?console.log("sayi gecerli") : console.log("sayi gecersiz");

var sayi = undefined;
sayi?console.log("sayi gecerli") : console.log("sayi gecersiz");

var sayi = [];//dizi
sayi?console.log("sayi gecerli") : console.log("sayi gecersiz");

var sayi = {};//obje
sayi?console.log("sayi gecerli") : console.log("sayi gecersiz");

var sayi = [];
sayi.lenght ?console.log("sayi gecerli") : console.log("sayi gecersiz");

var sayi = {};
sayi.keys?console.log("sayi gecerli") : console.log("sayi gecersiz");

var sayi = {};
sayi.values?console.log("sayi gecerli") : console.log("sayi gecersiz");

var sayi = {};
Object.keys(sayi).length?console.log("sayi gecerli") : console.log("sayi gecersiz");

var sayi = {isim:"Mehmet"};
Object.keys(sayi).length?console.log("sayi gecerli") : console.log("sayi gecersiz");
