const isim = "Mehmet";
const yas = 35;

const kullanici_objesi = {isim1: isim, yas1:yas};
console.log(kullanici_objesi);
const kullanici_objesi2 = {isim,yas};
console.log(kullanici_objesi);

function Sayac({baslangicDegeri,adim}){
    const [sayac,setSayac] = useCounter({baslangicDegeri,adim});
    return <button onClick={setSayac}>{sayac}</button>
}
