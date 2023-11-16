// [] === []
//false

//[1,2]===[1,2]
//false

/*

var nesne1 = {deger=1}
hata 

var nesne1 = {deger:1}
undefined

var nesne2 = {deger:1}
undefined

nesne1===nesne2
false
console.log(this) //nesnenin kendisi this olur
this === window
true
this.alert("merhaba")
alert("merhaba 2")
undefined
window.alert("merhaba 3")
undefined

*/

const urunServis = {
    ekle : function(){
        console.log(this);
    }
}

urunServis.ekle();