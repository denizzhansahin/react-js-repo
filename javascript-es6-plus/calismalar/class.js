class Personel{
    constructor(ad,soyad){
        this.ad = ad;
        this.soyad = soyad;
    }
    kaydet(){
        console.log("Personel kaydedildi." + this.ad);
        console.log(`Personel kaydedildi. ${this.ad}`);
    }
}

const personel = new Personel();
personel.kaydet();


personel.ad="Deniz";
console.log(personel.ad);
personel.kaydet();


// constructor, bir sınıfın yeni bir örneği oluşturulduğunda çağrılan özel bir metottur. Sınıfın instance özelliklerini başlatmak ve yapılandırmak için kullanılır.