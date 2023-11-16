/*
const isim = "Mehmet";
const kullanici = {isim,yas:35};
function merhaba(isim){
    return `Merhaba ${isim} `;
}
export{isim,kullanici,merhaba};

*/

export default function merhaba(isim){
    return `Merhaba ${isim}`;
}


const kullanici = {isim :"Mehmet",yas:35};

export {merhaba as default , kullanici};

//export default merhaba;


//anında yeniden dışarı aktar
export {default as merhaba} from './es-module';
export {kullanici} from './es-module';