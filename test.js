// const ali = "veli";
// let deli;

// deli=ali;
// deli = "zeli";

// console.log(deli);
// console.log(ali);

// const ogrenciler = ["Ali", "Barkın", "Berkay", "Cenk", "Çağatay"];

// let yeniOgrenciler = ogrenciler;

// console.log(yeniOgrenciler);

// yeniOgrenciler.pop();
// yeniOgrenciler.pop();
// yeniOgrenciler.unshift("Mert");

// console.log(yeniOgrenciler);
// console.log(ogrenciler);

//Spread (...) kopyalama

// const yeniOgrenciler= [...ogrenciler];

// yeniOgrenciler.pop();

// console.log(ogrenciler);
// console.log(yeniOgrenciler);

// console.log(Object.is(ogrenciler, yeniOgrenciler));

// const courses = [ "JavaScript", "React", "Node.js", "TypeScript" ];

// const student1 = {
//     fullName: "Berkay Turna",
//     nickname: "chilgin_coder",
//     isActive: true,
//     courses: courses
//     // courses: ["JavaScript", "React"],
//     // instructors: ["Orkun Durmaz"]
// };

// console.log({...student1, fullName: "Barkin Sayin"}); //shallow copy (sığ kopya)

// const student2 = JSON.parse(JSON.stringify({...student1, fullName: "Barkın", age: 24})); //deep copy
// //JavaScript Object Notation
// console.log(student1);

// console.log(student2);

//rest

// const greetEveryone = (...restOfPeople) => {
//     let result =  "Hello ";
//     for (let index = 0; index < restOfPeople.length; index++) {
//         result += `${restOfPeople[index]}, `;
//     }
//     console.log(result);
// }

// greetEveryone("Berkay", "Cenk", "Mert", "Orkun", "Hicran", "Buse", "Onder");

//destructuring
// function ilkIkiyiCikar(liste) {
//   const [a, b, ...gerikalan] = liste;
//   return gerikalan;
// }

// const kaynak = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const ilkIkisizKaynak = ilkIkiyiCikar(kaynak);
// console.log(ilkIkisizKaynak);

// Palindrom deneme

// function isPalindrome(word) {
//   let result = true;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] !== word[word.length - i - 1]) {
//       result = false;
//       break;
//     }
//   }
//   return result;
// }

// console.log(isPalindrome("racecar"));

//en büyük sayıyı bul

// function biggestNumber(numbersArr){
//   let num = [];
//   for(let i=0;i<numbersArr.length;i++){
//     if(numbersArr[i]>num){
//       num=numbersArr[i]
//     }
//   }
//   return num
// }
// const nums = [1,5,9,-196,125,-3,27,96,32,1326,16];

// console.log(biggestNumber(nums));

//Bir sayı dizisinde tekrar eden elemanları bul ve console'a yazdır.

// function findSameNumbers(arr){
//     sameNumbers=[];
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]===arr[j] && !sameNumbers.includes(arr[i])) {
//                 sameNumbers.push(arr[i])
//             }
//         }
//     }
//     return sameNumbers;
// }

// const numbers = [3, 6, 8, 6, 2, 15, 6, 2, 3, 19, 21];

// console.log(findSameNumbers(numbers));

// //Asal sayı bul, diziden çıkar ve konsola yazdır :)

// function findPrimeNumbers(arr){
//     primeArr=[];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 === 0 || arr[i] % 3 === 0 || arr[i] % 5 === 0){
//            primeArr.push(arr[i]);
//         }
//     }
//     return primeArr;
// }

// const forPrime = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
// console.log(findPrimeNumbers(forPrime));

// function getPositiveNums(element) {
//   if (element >= 0 && !(element % 2)) {
//     return true;
//   }
// }

// function getNegativeNums(element) {
//   if (element < 0 && element % 2) {
//     return true;
//   }
// }

// function getNums(arr, callback) {
//   const newArr = [];
//   arr.forEach((element) => {
//     if (callback(element)) {
//       newArr.push(element);
//     }
//   });
//   return newArr;
// }

// const nums = [0, -3, 2, 1, 4, 6, -6, 5, -7, -5, 8, 9, 21, 22];

// console.log(getNums(nums, getPositiveNums));

// fetch deneme

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); // Sunucudan gelen yanıtı JSON olarak dönüştür
//   })
//   .then(data => {
//     console.log(data); // JSON verisini konsola yazdır
//   })
//   .catch(error => {
//     console.error('There was a problem with your fetch operation:', error);
//   });

//async denemeler

const mainUrl = "https://jsonplaceholder.typicode.com/todos";

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest(); // readystate 0

//     request.addEventListener("readystatechange", () => {
//       //   console.log(request, request.readyState);
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText); //JSON'ı nesneye dönüştürme
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("Could not fetch data");
//       }
//     });

//     request.open("GET", resource); //readystate 1
//     request.send(); //readystate 2
//   });
// };

// getTodos(`${mainUrl}/1`)
//   .then((data) => {
//     console.log("promise 1: ", data);
//     return getTodos(`${mainUrl}/2`);
//   })
//   .then((data) => {
//     console.log("promise 2: ", data);
//     return getTodos(`${mainUrl}/3`);
//   })
//   .then(data => {
//     console.log('promise 3: ', data);
//     return getTodos(`${mainUrl}/4`)})
//   .catch((err) => console.log(err));

// getTodos((err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

//promise örnek

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     resolve("some data");
//     reject("some error");
//   });
// };

//fetch api

// fetch(`${mainUrl}/1 `)
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));


//async & await

console.log(1);
console.log(2);
const getTodos = async () => {
  const response = await fetch(`${mainUrl}/1`);

  if(response.status !== 200){
    throw new Error('Cannot fetch the data');
  }
  const data = await response.json();
  return data;
};

getTodos().then((data) => console.log(data));
console.log(3);
console.log(4);
