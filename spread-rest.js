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

  const person = {
    name: "John",
    age: 30,
    city: "London",
    country: "England",
  };
  
  const { name, age } = person;
  
  console.log(name);
  console.log(age);


  //Diziden veri ayıklama

  const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(rest);