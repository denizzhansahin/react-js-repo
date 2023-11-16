//document.getElementById("bio").innerHTML="Denizhan ŞAhin" //ilgili id bilgisine sahip elemanı yakala

var intro1 = document.getElementById("intro1"); //eleman id ile işlem

var mesaj = document.getElementById("mesaj");

mesaj.innerHTML = intro1.innerHTML;


var tumListeler = document.getElementsByTagName("ul"); //bütün ul kullan
var sehirler = tumListeler[0];

tumElemanlar = sehirler.getElementsByTagName("li");

for(i = 0;i<tumElemanlar.length;i++){
    //alert(tumElemanlar[i].innerHTML);
}



var classElemanlari = document.getElementsByClassName("intro1"); //class ile ilgili elemanları alma
//alert(classElemanlari[0].innerHTML);
//alert(classElemanlari[1].innerHTML);
//alert(classElemanlari.length);

var queryElemanlari = document.querySelectorAll("p.intro1");
//alert(queryElemanlari.length);

var isimElemanlari = document.getElementsByName("musteriAdi");
//alert(isimElemanlari[0].value,);


var denizzz = document.getElementById("denizzzz").addEventListener("mouseover",rengiDegistir); // click ile tıklama, mouseover ike üzerine gelindiğinde

function rengiDegistir(){
    document.getElementById("div1").style.color = "red";
    var isimElemanlari = document.getElementsByName("musteriAdi");
    isimElemanlari[0].value = "Deniz";
}


var node = document.getElementById("agac"); // agac yapısı mantığına göre hareket etmek
alert(node.childNodes[0].nodeValue);

var baslik = document.createElement("h2");
var node = document.createTextNode("Merhaba JS");
baslik.appendChild(node);

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");

div1.insertBefore(baslik,p2)

alert("P2 siliniyor");
div1.removeChild(p2);

alert("Değiştiriliyor");
var p1 = document.getElementById("p1");
div1.replaceChild(baslik,p1);