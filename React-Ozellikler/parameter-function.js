function topla(sayi1,sayi2){
    return sayi1 + sayi2;
}

console.log(topla(2,3));

function topla1(sayi1=5,sayi2=5){
    return sayi1 + sayi2;
}

console.log(topla1(3));


const STATE_BASLANGICI = {yukleniyor : false, yazilar : []};
const reducer = (state = STATE_BASLANGICI,action)=>{
    //burada state değerine başlangıç olarak STATE_BASLANICI atanır
    //bu kısımı, reduceri anlamadim
    return state;
}