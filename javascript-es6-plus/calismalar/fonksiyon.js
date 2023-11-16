var selamFonksiyonu = function selam(){
    console.log("Merhaba");
}

selamFonksiyonu();
//selam();


const selamFonksiyonu2 = ()=>{
    console.log("Merhaba2");
}

selamFonksiyonu2();

const selamFonksiyonu3 = ()=> console.log("Merhaba 3");
selamFonksiyonu3();

const selamFonksiyonu4 = (mesaj)=> console.log(mesaj);
selamFonksiyonu4("Merhaba Dünya");

var topla = (sayi1,sayi2)=>{
    return sayi1+sayi2;

}

let toplam = topla(3,4);
console.log(toplam);