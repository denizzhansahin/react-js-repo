//const veriGetir = new Promise((resolve, reject) => {});

const veriGetir = new Promise((basarili, basarisiz) => {
    const veriGeldiMi = true;
    if(veriGeldiMi){
        basarili("Verimiz geldi");
    }else{
        basarisiz("Veriyi alamadık");
    }
});

veriGetir.then((cevap) => console.log("Gelen cevap : ",cevap))
.catch((hata)=>console.log("Gelen hata",hata));