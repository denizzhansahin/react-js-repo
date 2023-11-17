//const veriGetir = new Promise((resolve, reject) => {});
/*
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

*/

// çalışmaz import axios from "axios";
const axios = require("axios");

//console.log(axios);


//https://restcountries.eu/rest/v2/all

function ulkeGetir(){
    //axios.get("https://restcountries.eu/rest/v2/all");
    //console.log(axios.get("https://restcountries.eu/rest/v2/all"));
    axios.get("https://restcountries.eu/rest/v2/all")
    .then((response) => console.log(response)).catch(err=>console.log(err));

    axios.get("https://restcountries.eu/rest/v2/all")
    .then((response) => console.log(response.data)).catch();

    axios.get("https://restcountries.eu/rest/v2/all")
    .then((response) => console.log(response.data[0])).catch();
}

ulkeGetir();



async function ulkeGetir2(){
    //axios.get("https://restcountries.eu/rest/v2/all");
    //console.log(axios.get("https://restcountries.eu/rest/v2/all"));
    const ulkeListesi =await axios.get("https://restcountries.eu/rest/v2/all");
    console.log(ulkeListesi);
    console.log(ulkeListesi.data);
    console.log(ulkeListesi.data[0]);
}

ulkeGetir2();