console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);


for(i=1;i<=10;i++){
    console.log(i);
}

console.log("Bitti");


var sehirler = ["Ankara","İstanbul","İzmir","Adana"]
console.log(sehirler[1])

for(i=0;i<sehirler.length;i++){
    console.log(sehirler[i])
}

var i = 1;
while(i<100){
    console.log(i);
    i++;
}

var i = 1;
do{
    console.log(i)
    i++;
}while(i<10)


sehirler.forEach(function(sehir){
    console.log(sehir)
})