//Spread
//Array birleştirme

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combinedArr = [...arr1, ...arr2];

// console.log(combinedArr);


//Object birleştirme

// const obj1 = {
//   name: "John",
//   age: 30,
// };

// const obj2 = {
//   city: "London",
//   country: "England",
// };

// const combinedObj = { ...obj1, ...obj2 };

// console.log(combinedObj);


//Fonksiyona argüman geçirme

// function sum(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 2, 3];

// const sumOfNumbers = sum(...numbers);

// console.log(sumOfNumbers);


//Diziden kopya almak

// const arr = [1, 2, 3];

// const copyArr = [...arr];

// console.log(copyArr);


//Dizinin kalanını yakalama

// const arr = [1, 2, 3, 4, 5];

// const [first, ...rest] = arr;

// console.log(first);
// console.log(rest);


//Rest
//Fonksiyona argüman olarak geçirilen değerleri yakalama

// function sum(...numbers) {
//     let total = 0;
//     for (const number of numbers) {
//       total += number;
//     }
//     return total;
//   }

//   const result = sum(1, 2, 3, 4, 5);

//   console.log(result);


//Nesnenin kalan özelliklerini bir değişkene atama

//   const person = {
//     name: "John",
//     age: 30,
//     city: "London",
//     country: "England",
//   };

//   const { name, ...otherInfo } = person;

//   console.log(name);
//   console.log(otherInfo);


//Destructuring

//Nesneden veri ayıklama

// const person = {
//   name: "John",
//   age: 30,
//   city: "London",
//   country: "England",
// };

// const { name, age } = person;

// console.log(name);
// console.log(age);


//Diziden veri ayıklama

//   const numbers = [1, 2, 3, 4, 5];

// const [first, second, ...rest] = numbers;

// console.log(first);
// console.log(second);
// console.log(rest);




// const petAnimals = ["cat", "dog", "parrot", "guinea pig", "ferret"];

// //yanlış..
// // const newPets = petAnimals

// // newPets.pop();
// // newPets.pop();

// // newPets.push("goat", "camel :)");

// // console.log(newPets);
// console.log(petAnimals); //referans dolayısıyla heap verisi değişti.

// const newPets = [...petAnimals];

// newPets.pop();
// newPets.pop();

// newPets.push("camel :)");
// newPets.unshift("goat");

// console.log(newPets);
// console.log(petAnimals); //spread operatörü ile yeni bir dizi oluşturuldu, orjinal dizi etkilenmedi

const patient = {
  name: "Paşa",
  age: 12,
  animal: "köpek",
  breed: "golden retriever",
  hobbies: ["top", "yüzme", "havlama"]
}

// const newPatient = { ...patient };
// patient.hobbies[1] = "ağaç sulamak"; //shallow copy

const newPatient = JSON.parse(JSON.stringify(patient));
patient.hobbies[2] = "değişti bak"; //deep copy

console.log(patient);
console.log(newPatient);

console.log(Object.is(patient.hobbies, newPatient.hobbies));