var kullanicilar = [
    {email:"denizhansahin@yaani.com",sifre:"12345"},
    {email:"denizhansahin@yaani.com",sifre:"1234"}
]

var tivitler = [
   {email:"denizhansahin@yaani.com",tivit:"hava çok güzel"},
   {email:"denizhansahin@yaani.com",tivit:"hava çok güzel"},
   {email:"denizhansahin@yaani.com",tivit:"hava çok güzel"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function kullaniciVarmi(email,sifre){
    console.log(email);
    console.log(sifre);
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre){
            return true;
        }
    }

    return false

    
}

function giris(){
   if(kullaniciVarmi(email,sifre))
       {
           console.log(tivitler)
       } else {
           console.log("Kullanici adi ve soyadi hatali")
       }
}

giris()