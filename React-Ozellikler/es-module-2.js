import {isim as myName,kullanici as myUser,merhaba as myHello} from './es-module';

console.log(myName); // Mehmet
console.log(myUser); // {isim: "Mehmet", yas: 35}
console.log(myHello("Ali")); // Merhaba Ali


import merhaba from './es-module';

import {default as merhaba} from './es-module';


