// let studentName = "Berkay Turna";
// let instructorAge = 18;
// console.log(studentName);
// console.log(typeof studentName, typeof instructorAge);
// const pi = 3.14;
// console.log(pi);
// console.log(studentName.length);
// console.log(studentName[10]);
// let logo = null;
// console.log(logo);
// let lg;
// console.log(lg);

// let text =
//   'Bilim dünyası, insanlarda dünyası ölümcül enfeksiyonlara yol açan ve ilaca dirençli olan \n"Acinetobacter baumannii" adlı bakteriyi öldürebilecek bir antibiyotik geliştirdi.';
// console.log(text);
// let text1 =
//   'Bilim dünyası, insanlarda ölümcül enfeksiyonlara yol açan ve ilaca dirençli olan \t"Acinetobacter baumannii" adlı bakteriyi öldürebilecek bir antibiyotik geliştirdi.';
// console.log(text1);
// console.log(true, false);

// console.log(text.indexOf("dünyası") + 1);

// let student = "Mert";
// let mid = "Martin";
// let slast = "Kırant";
// const course = "Frontend Dev";
// const tarih = "25.05.2025";

// let sentence =
//   'Bilim dünyası, insanlarda dünyası ölümcül enfeksiyonlara yol açan ve ilaca dirençli olan "Acinetobacter baumannii" adlı bakteriyi öldürebilecek bir antibiyotik geliştirdi.';
// let sentence1 =
//   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ipsum In, fugit, ullam vitae, neque ipsum cupiditate eius officia est harum quod at ipsum provident assumenda impedit placeat quo quas nam error similique. Porro, perspiciatis ex! Tenetur tempora reprehenderit voluptates obcaecati, iste blanditiis? Maxime temporibus laborum officia aliquam. Veritatis officiis rem totam natus unde temporibus obcaecati, nulla repellat placeat provident. Saepe, enim tempore Saepe o";
// let sentence2 =
//   "      Consequatur fugiat, veniam est voluptatem incidunt et tenetur ipsa nesciunt, molestiae nostrum nobis quod impedit beatae non tempora illum qui eaque ex ad laudantium quasi culpa sapiente eius illo.      Repellendus.       ";
// console.log(sentence2.trim());
// console.log(mid.concat(" " + slast));

// console.log(student.toUpperCase());
// console.log(mid.toLowerCase());

// console.log(sentence.slice(1, 21));
// console.log(sentence.substring(25, 3));
// console.log(sentence.substr(10, 20));

// console.log(sentence1.replace("ipsum", "pusum"));
// console.log(sentence1.replaceAll("ipsum", "susadım"));

// console.log(sentence.indexOf("dünyası"));
// console.log(sentence.indexOf("dünyası", sentence.indexOf("dünyası") + 1));
// console.log(sentence.lastIndexOf("dünyası"));
// console.log(sentence1.includes("amet"));
// console.log(sentence1.includes("ameti"));
// console.log(sentence2.search("fugiat"));

// console.log(
//   `Öğrencimiz ${
//     student + " " + mid + " " + slast
//   } ${tarih} tarihinde ${course} isimli kursumuzu tamamlamıştır.`
// );
// const num = 5;

// if (num > 0) {
//   console.log("The number is positive.");
// }

// var x = 5;
// var y = 10;

// if (x > 0 && y > 0) {
//   console.log("Hem x hem de y 0'dan büyüktür.");
// } else if (x > 0 || y > 0) {
//   console.log("x veya y'den en az biri 0'dan büyük.");
// } else {
//   console.log("Ne x ne de y 0'dan büyük değil.");
// }

// console.log(Math.trunc(Math.random() * 10));

// console.log(Math.trunc(Math.random() * 100)); //100 hariç
// console.log(Math.round(Math.random() * 100)); //100 dahil

// console.log(Math.trunc(Math.random() * 17)); //17 hariç
// console.log(Math.round(Math.random() * 17)); //17 dahil

// console.log(Math.trunc(Math.random() * 10) - 5); //5 hariç
// console.log(Math.round(Math.random() * 10) - 5); //5 dahil

// console.log(Math.trunc(Math.random() * 32) - 32); //0 hariç
// console.log(Math.round(Math.random() * 32) - 32); //0 dahil

// let cenk = 59;

// if (cenk == 25) {
//   console.log("ooo cenk beyler gelmişler");
// } else if (cenk >= 60) {
//   console.log("helal olsun");
// } else if (cenk >= 26) {
//   console.log("sen kimsin");
// } else {
//   console.log("ne diyorsun");
// }

// let summ = 3 + 3; //expression
// let no = 10; //expression

// //statement
// if (no > 10) {
//   console.log("10'dan büyük");
// } else if (no < 10) {
//   console.log("10'dan küçük");
// } else {
//   console.log("tam 10");
// }

// for (let sa = 15; sa > 5; sa--) {
//   console.log(sa);
// }

// while (no > 3) {
//   console.log(no);
//   no--;
// }

// //statement //statement
// console.log(typeof summ);

// let age = 21;
// age > 20 && console.log("adult");
// age > 20 || console.log("adult");
// !(age > 20) || console.log("adult");

// if (age > 20 && age < 40) {
//   console.log("20 - 40 arası erişkin");
// } else if (age > 40 && age < 60) {
//   console.log("40 - 60 arası erşkin");
// } else if (age < 15 || age > 60) {
//   console.log("60 üstü yaşlı");
// }

// //ternary operator
// age > 18 ? console.log("adult") : console.log("underaged"); //expression
// //condition ?        exprIfTrue    :    expIfFalse;
// if (age > 18) {
//   console.log("adult");
// } else {
//   console.log("underaged");
// } //statement

// function topla(a, b) {
//   return a + b;
// }
// let sonuc = topla(3, 4);
// console.log(sonuc);
// let dizi = [1, 2, 3, 4, 5];
// let eleman = dizi[2];
// console.log(eleman);

// let day = 6;
// switch (day) {
//   case 1:
//     console.log("Pazartesi");
//     break;
//   case 2:
//     console.log("Salı");
//     break;
//   case 3:
//     console.log("Çarşamba");
//     break;
//   case 4:
//     console.log("Perşembe");
//     break;
//   case 5:
//     console.log("Cuma");
//     break;
//   case 6:
//     console.log("Cumartesi");
//     break;
//   case 7:
//     console.log("Pazar");
//     break;

//   default:
//     console.log("Saçmalama");
//     break;
// }

// if (day > 0 && day < 6) {
//   console.log("Hafta içi");
// } else if (day > 5 && day < 8) {
//   console.log("Hafta sonu");
// } else {
//   console.log("yok böyle bir dönem");
// }

// let month = 12;
// month = month % 12;

// if (month === 0) {
//   month = month + 12;
// } else if (month < 0) {
//   month = Math.abs(month);
// }

// switch (month) {
//   case 1:
//     console.log("Ocak");
//     break;
//   case 2:
//     console.log("Şubat");
//     break;
//   case 3:
//     console.log("Mart");
//     break;
//   case 4:
//     console.log("Nisan");
//     break;
//   case 5:
//     console.log("Mayıs");
//     break;
//   case 6:
//     console.log("Haziran");
//     break;
//   case 7:
//     console.log("Temmuz");
//     break;
//   case 8:
//     console.log("Ağustos");
//     break;
//   case 9:
//     console.log("Eylül");
//     break;
//   case 10:
//     console.log("Ekim");
//     break;
//   case 11:
//     console.log("Kasım");
//     break;
//   case 12:
//     console.log("Aralık");
//     break;
//   default:
//     console.log("Böyle bir ay görülmedi dünyada");
//     break;
// }

// if (month > 2 && month < 6) {
//   console.log("İlkbahar");
// } else if (month > 5 && month < 9) {
//   console.log("Yaz");
// } else if (month > 8 && month < 12) {
//   console.log("Sonbahar");
// } else if (month == 12 || month == 1 || month == 2) {
//   console.log("Kış");
// } else {
//   console.log("Saçmalık");
// }

// const mert = "Mert erken yat, programalama çalış!";
// let index = 0;
// while (index < mert.length) {
//   console.log(mert[index]);
//   index++;
// }

// for (let index = mert.length; index >= 0; index--) {
//   console.log(mert[index]);
// }

// index = mert.length;
// while (index >= 0) {
//   console.log(mert[index]);
//   index--;
// } // undefined nedir??

// for (let index = 0; index < mert.length; index++) {
//   if (index % 5 === 0) {
//     console.log(mert[index], index);
//   }
// }

// index = 0;

// while (index < mert.length) {
//   if (index % 5 === 0) {
//     console.log(mert[index], index);
//   }
//   index++;
// }

// for (let index = 0; index < mert.length; index = index + 2) {
//   console.log(mert[index], index);
// }

// index = 0;

// while (index < mert.length) {
//   console.log(mert[index], index);
//   index = index + 2;
// }

// let nomre = 24;
// nomre % 2 === 0 ? console.log("çift") : console.log("tek");

// if (nomre > 0) {
//   console.log("pozitif");
// } else {
//   console.log("negatif veya sıfır");
// }

// let stud = ["Ali", "Barkın", "Berkay", "Cenk", "Hakan"];

// for (let i = 0; i < stud.length; i++) {
//   console.log(stud[i]);
// }

// let fruits = ["Çilek", "Muz", "Patlıcan"];
// let i = 0;

// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

// let fruit = ["Çilek", "Muz", "Patlıcan"];
// let indexi = 0;

// do {
//   console.log(fruit[indexi]);
//   indexi++;
// } while (indexi < fruit.length);

// const araba = ["audi", "bentley", "renault", "tesla", "volvo"];
// araba[9] = "togg";
// console.log(araba);
// araba[7] = "porsche";
// console.log(araba);

// araba[araba.length] = "meredes";
// console.log(araba);
// console.log(araba.push("ferrari"), araba);
// console.log(araba.pop(), araba);
// console.log(fruit.concat(araba), fruit, araba);
// //console.log(araba.shift(), araba);
// //console.log(araba, araba.unshift("bugatti"));

// console.log(araba.indexOf("bentley"));

// let d = araba.indexOf("audi");

// if (d === -1) {
//   console.log(false);
// } else {
//   console.log(true);
// }

// araba.indexOf < 0 ? console.log(true) : console.log(false);

// const products = [
//   "Kedi Maması",
//   250,
//   true,
//   "Köpek Maması",
//   200,
//   true,
//   "Kedi tasması",
//   100,
//   false,
//   "Köpek tasması",
//   120,
//   true,
//   "Kedi kumu",
//   150,
//   true,
//   "Ödül maması",
//   220,
//   true,
//   "Kedi oyuncağı",
//   60,
//   true,
//   "Köpek oyuncağı",
//   80,
//   false,
// ];

// // 4 ürün ekle
// products.splice(3, 0, "Kuş yemi", 135, true);
// products.splice(6, 0, "Davşan yemi", 95, true);
// products.splice(9, 0, "Tosbağa", 255, false);
// products.splice(12, 0, "Muhabbet Kuşu", 205, false);
// console.log(products);

// // 4 ürün çıkar
// products.splice(12, 3);
// products.splice(9, 3);
// products.splice(6, 3);
// products.splice(3, 3);
// console.log(products);

// // 4 ürün güncelle
// products.splice(1, 1, 350);
// products.splice(4, 1, 250);
// products.splice(2, 1, false);
// products.splice(5, 1, false);
// console.log(products);

// // işlemleri aynı anda yap
// products.splice(products.indexOf("Kedi kumu") + 1, 2, 175, false);
// products.splice(
//   products.indexOf("Kedi oyuncağı") + 2,
//   3,
//   false,
//   "Köpüş oyuncağı",
//   95
// );
// products.splice(products.indexOf("Ödül maması") + 1, 1, 250);
// products.splice(
//   products.indexOf("Kedi Maması"),
//   5,
//   "Kitten Mama",
//   372,
//   true,
//   "Puppy Mama",
//   265
// );
// console.log(products);

// const carNames = [
//   "audi",
//   "bentley",
//   "renault",
//   "tesla",
//   "Volvo",
//   "dacia",
//   "peugeot",
//   "saab",
//   "citroen",
// ];

// let carName = prompt("Hangi aracı arıyorsun?").toLowerCase().trim();
// let result = null;

// for (let i = 0; i < carNames.length; i++) {
//   if (carNames[i].toLowerCase() === carName) {
//     result = carNames[i];
//     break;
//   }
// }
// if(result) {
//     console.log("Listede var");
//     console.log(carName);
// } else {
//     console.log("Listede yok");
//     console.log(carName);
// }

//en büyük sayıyı bul
// const numbers = [
//   -12, 8, -5, 12, 27, 36, 2, 5, 4, 3, 9, 1, 39, 6, 97, 32, 53, 23, 46,
// ];
// let arr = numbers[0];

// for (i = 0; i < numbers.length; i++) {
//   if (numbers[i] > arr) {
//     arr = numbers[i];
//   }
// }
// console.log(arr);

//Verilen bir sayı dizisinde tekrar eden
//elemanları bul ve dizi halinde console'a yazdır.

// const numara = [3, 6, 8, 6, 2, 15, 6, 2, 3, 19, 21];
// const ayni = [];

// for(let i = 0; i < numara.length; i++) {
//     for(let k = i + 1; k < numara.length; k++) {
//        if (numara[i] === numara[k] && !ayni.includes(numara[i])) {
//         ayni.push (numara[i]);
//     }
// }
// }
// console.log(ayni);

// 200 üzeri işlem ve 2den fazla sayıda hata....^^^^^

//20'ye kadar olan asal sayıları bul ve dizi halinde console'a yazdır.

// const asal = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// const asalBul = [];

// for(i = 0; i < asal.length; i++) {
//     if(asal[i] <= 1) {

//     } else if (asal[i] % 2 === 0 || asal[i] % 3 === 0 || asal[i] % 5 === 0){

//     } else {
//         asalBul.push(asal[i]);
//     }
// }

// console.log(asalBul);

//[4,10,8,6,10,9,2,10,4,6] dizisindeki en sık tekrar eden sayıyı bulup console'a yazdır.

// toplamları <41 5 sayı seç

//self invoking
// (function(x){
//     console.log(x+x)}
//    (6))

// Higher-order fonksiyon örneği
// function manipulateArray(array, manipulationFunction) {
//     // manipulationFunction, her elemana uygulanacak işlemi tanımlayan bir fonksiyondur.
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//         result.push(manipulationFunction(array[i]));
//     }
//     return result;
// }

// // Array elemanlarını iki katına çıkaran bir fonksiyon
// function double(x) {
//     return x * 2;
// }

// // Array elemanlarını üçe bölen bir fonksiyon
// function divideByThree(x) {
//     return x / 3;
// }

// var numbers = [1, 2, 3, 4, 5];

// // manipulateArray fonksiyonunu kullanma
// var doubledNumbers = manipulateArray(numbers, double);
// var dividedNumbers = manipulateArray(numbers, divideByThree);

// console.log(doubledNumbers);  // [2, 4, 6, 8, 10]
// console.log(dividedNumbers);  // [0.3333, 0.6667, 1, 1.3333, 1.6667]

// function faktoriyel(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * faktoriyel(n - 1);
//     }
// }

// console.log(faktoriyel(5));  // Çıktı: 120
// //                  5!=5x4x3x2x1  ilginnnnççççç

// const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
// console.log(fibonacci(4));

// function carp(num1, num2) {
//   return num1 * num2;
// }

// console.log(carp(3, 6));

// function ekle(string1, string2) {
//   return string1 + string2;
// }

// console.log(ekle("Cenk ","Kaynak"));

// const carpma = function (num1, num2) {
//   return num1 * num2;
// };

// console.log(carpma(2, 7));

// const ekleme = function (isim, soyisim) {
//   return isim + soyisim;
// };
// console.log(ekleme("Cenk ", "Kaynak"));

// const toplamaca = (num1, num2) => num1 + num2;

// console.log(toplamaca(8, 3));

// const cokluTopla = (num1,num2=0,num3=0) => num1+num2+num3;

// console.log(cokluTopla(2,5));

// const greet = person => ("Hello " + person);

// console.log(greet("Ege"));

// const achtung = () => ("Hoist yalnızca declarationda çalışır UNUTMA!! ");
// console.log(achtung());

// const myArray = [1, 2, "Orkun", 3, 4, "Buse", 5];
// const mySecond = [1, 12, 21, 36, 65, 78];
// const myThird = ["a", "b", "c", "d", "e", "f", "g"];

// function reverseArray(input) {
//     const myNewArray = [];
//   for (i = input.length - 1; i > -1; i--) {
//     myNewArray.push(input[i]);
//   }
//   return console.log(myNewArray);
// }
// reverseArray(myArray);
// reverseArray(mySecond);
// reverseArray(myThird);

// const reverseArray = (inputArr) => {
//   const myNewArray = [];
//   for (i = inputArr.length - 1; i > -1; i--) {
//     myNewArray[myNewArray.length] = inputArr[i];
//   }
//   return myNewArray;
// }

// console.log(reverseArray(myArray));
// console.log(reverseArray(mySecond));
// console.log(reverseArray(myThird));

// function hesapla(num1, num2, callback) {
//     return callback(num1, num2);
// }

// function hesapCarp(num1, num2) {
//     return num1 * num2;
// }

// function hesapTopla(num1, num2) {
//     return num1 + num2;
// }

// console.log(hesapla(10, 15, hesapCarp));

// console.log(hesapla(5, 15, hesapTopla));

// function alanHesapla(yaricap) {
//     return Math.PI * yaricap * yaricap;
// }
// function cevreHesapla(yaricap) {
//     return 2 * Math.PI * yaricap;
// }
// function cemberBilgisiGoster(yaricap) {
//     console.log("Yarıçap:", yaricap);
//     console.log("Alan:", alanHesapla(yaricap));
//     console.log("Çevre:", cevreHesapla(yaricap));
// }
//  cemberBilgisiGoster(3);
// let pet = {
//     isim: "Jaina",
//     yas: 3,
//     tur: "Kedi"
// };

// let propertyName = "tur";

// console.log(pet[propertyName]);

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// // Dot notation kullanarak özelliğe erişme
// let personName = person.name;

// console.log(person.age);

// let pet = {
//     isim: "Jaina",
//     yas: 3,
//     tur: "Kedi"
//     };

//     console.log(pet.hasOwnProperty("isim"));

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// // Object.seal() metoduyla nesneyi kilitler
// Object.seal(person);

// // Mevcut özelliklerin değerlerini değiştirme
// person.age = 35;
// console.log(person); // Output: { name: "John", age: 35, city: "New York" }

// // Yeni bir özellik eklemeye çalışma
// person.gender = "Male";
// console.log(person); // Output: { name: "John", age: 35, city: "New York" }

// // Mevcut bir özelliği silmeye çalışma
// delete person.city;
// console.log(person); // Output: { name: "John", age: 35 }

// let pet = {
//     isim: "Jaina",
//     yas: 3,
//     tur: "Kedi"
//     };
//     console.log(Object.entries(pet));

// let pet = {
//     isim: "Jaina",
//     yas: 3,
//     tur: "Kedi"
//     };

// console.log(pet);

// console.log(pet.isim);

// pet.cins = "Scottish";

// console.log(pet);

// pet["İyi huylu mu?"] = "Evet";

// console.log(pet);

// delete pet["İyi huylu mu?"];

// console.log(pet);

// let petName = "Misha";
// pet.isim = petName;

// console.log(pet);

let client1 = {
    fullName: "Cenk Kaynak",
    age: 25,
    hobbies: ["reading", "coding", "playing bass", "grooming animals"],
    instructors: [
      {
        fullName: "Ta kendisi",
        email: "cenkaynak@cenk.kay",
        phone: "01234567890",
        address: "Foca/İzmir",
      },
      {
        fullName: "Orkun Durmaz",
        email: "cilqin_codçu3531@durmaz.com",
        phone: "2397523957",
        address: { first: "İstanbul", second: "İzmir" },
      },
    ],
    isMentallyHealthy: true,
  };
  
  let client2 = {
    fullName: "Mert Kırant",
    age: 22,
    hobbies: [
      "swimming",
      "feeding lizards",
      "playing lol",
      "listening Orkun Hodja",
    ],
    instructors: [
      {
        fullName: "Ta kendisi",
        email: "mert@cenk.kay",
        phone: "01274567890",
        address: "İstanbul",
      },
      {
        fullName: "Orkun Durmaz",
        email: "cilqin_codçu3531@durmaz.com",
        phone: "2397523957",
        address: { first: "İstanbul", second: "İzmir" },
      },
    ],
    isMentallyHealthy: true,
  };
  
  let client3 = {
    fullName: "Berkay Turna",
    age: 45,
    hobbies: ["philosophy", "coding", "playing uke", "stealing books from Orkun"],
    instructors: [
      {
        fullName: "Ta kendisi",
        email: "berkayturna@cenk.kay",
        phone: "01294567990",
        address: "Konak/İzmir",
      },
      {
        fullName: "Orkun Durmaz",
        email: "cilqin_qodchu3531@durmaz.com",
        phone: "2397523957",
        address: { first: "İstanbul", second: "İzmir" },
      },
    ],
    isMentallyHealthy: false,
  };
  
  console.log(client3);
  
  client3.instructors[1].address.second = "Erzurum";
  delete client3.age;
  console.log(client3.instructors);
  console.log(client3);
  console.log(client2.hasOwnProperty("hobbies"));
  console.log(client1.hasOwnProperty("hobiler"));
  console.log(Object.keys(client3));
  console.log(Object.keys(client3.instructors[0]));
  console.log(Object.values(client2.instructors[0]));
  console.log(Object.entries(client1));
  
  let client4 = {
    fullName: "Barkın Sayın",
    age: 21,
    courses: [
      { courseName: "JS", year: 2020 },
      { courseName: "React", year: 2021 },
    ],
    isMentallyHealthy: true,
  };
  
  console.log(client4);
  client4.courses[2] = { courseName: "Node.JS", year: 2023 };
  console.log(client4.courses);
  console.log("------------------------------");
  console.log(Object.values(client4.courses[0]));
  
  let client5 = {
    fullName: "Mert Kırant",
    age: 19,
    hobbies: [
      {
        outdoor: ["sky diving", "yatching"],
        indoor: ["coffee tasting", "code learning"],
      },
    ],
    isMentallyHealthy: false,
  };
  console.log(client5.hobbies);
  console.log(Object.entries(client5));
  