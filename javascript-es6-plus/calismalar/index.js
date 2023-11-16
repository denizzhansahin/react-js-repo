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


function giris(){
    if(email == kullanicilar[0].email && sifre == kullanicilar[0].sifre ||
        email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)
        {
            console.log(tivitler)
        } else {
            console.log("Kullanici adi ve soyadi hatali")
        }
}

giris(email,sifre)