let kullanici = {isim :"Mehmet",yas:35,sehir:"İstanbul"};
console.log(kullanici);

kullanici.sehir = "Ankara"; //Yanlış
console.log(kullanici);
kullanici = {isim :"Mehmet",yas:35,sehir:"İstanbul",sehir:"Anakra"};
console.log(kullanici);

kullanici = {...kullanici,sehir:"Ankara"};
console.log(kullanici);



INITIAL_STATE = {
    yukleniyor : false,
    hataMesaji : "",
    arabalar : ["Mercedes","BMW","Audi"],
};

const reducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case "ARABA_EKLE":
            return {...state,arabalar: [...state.arabalar,action.payload]}
        default: return state;
    }
}

//dispatch({type : "ARABA_EKLE",payload:"Tofas"})

