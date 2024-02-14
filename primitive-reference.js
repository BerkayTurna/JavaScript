//DEĞİŞTİRİLEBİLİRLİK

// İlkel veri tipi (Değiştirilemez)
let str1 = "Merhaba";
let str2 = str1;
str2 = "Selam";

console.log(str1);
console.log(str2);

// Referans veri tipi (Değiştirilebilir)
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

console.log(arr1); 
console.log(arr2); 

//KOPYALANABİLİRLİK

// İlkel veri tipi (Kopyalama)
let num1 = 10;
let num2 = num1;
num2 = 20;

console.log(num1);
console.log(num2);

// Referans veri tipi (Kopyalama değil, Referans aktarımı)
let obj1 = { name: "Berkay" };
let obj2 = obj1;
obj2.name = "Barkın";

console.log(obj1.name);
console.log(obj2.name);

//BELLEK İŞLEYİŞİ

// İlkel veri tipi
let a = 5;
let b = a;

// Bellekteki durum
// a: 5
// b: 5

a = 10;

// Bellekteki yeni durum
// a: 10
// b: 5

// Referans veri tipi
let arr3 = [1, 2, 3];
let arr4 = arr3;

// Bellekteki durum:
// arr1: [1, 2, 3]
// arr2: [1, 2, 3]

arr3.push(4);

// Bellekteki yeni durum
// arr1: [1, 2, 3, 4]
// arr2: [1, 2, 3, 4]
