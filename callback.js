// const hesap = (num1, num2, callback) => {
//   return callback(num1, num2);
// };

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(hesap(3, 5, sum));

// const students = ["Berkay", "Cenk", "Mert", "Orkun", "Hicran", "Buse", "Onder"];

// const ourOwnForEach = (arr, callbackFn) => {
//   for (let index = 0; index < arr.length; index++) {
//     callbackFn(arr[index], index);
//   }
// };
// const ourOwnFilter = (arr, callbackFn) => {
//   for (let index = 0; index < arr.length; index++) {
//     callbackFn(arr[index], index);
//   }
// };

// const logElementWithIndex = (element, index) => {
//   console.log(`index ${index}: ${element}`);
// };

// const newArr = [];
// ourOwnForEach(students, (student, index) => {
//   if (index % 2 === 0) {
//     newArr.push(student);
//     console.log(`index ${index}: ${student}`);
//   }
// });
// console.log(newArr);

// ourOwnForEach(
//     students,
//     logElementWithIndex
// )

// ourOwnForEach(students, student => console.warn(student));

// const ourOwnMap = (arr, callbackFn) => {
//     const newArr = [];
//     for (let index = 0; index < arr.length; index++) {
//         const callbackResult = callbackFn(arr[index], index, arr);
//         newArr.push(callbackResult);
//     }
//     return newArr;
// }

// const mapResult = ourOwnMap(
//     students,
//     (student, index) => {
//         if (index % 2 === 0) {
//             return student;
//         }

//     }
// );

// console.log(mapResult);

// const customFilter = (arr, callbackFn) => {
//     const filteredArr = [];
//     for (let index = 0; index < arr.length; index++) {
//         if (callbackFn(arr[index], index, arr)) {
//             filteredArr.push(arr[index]);
//         }
//     }
//     return filteredArr;
// }

// const filteredStudents = customFilter(
//     students,
//     (student, index) => {
//         if (index % 2 === 0) {
//             return true;
//         }
//         // else {
//         //     return false;
//         // }
//     }
// );
// customFilter(
//     students,
//     (student, index) => index % 2 === 0
// );

// console.log(filteredStudents);

// const x = ()=>console.log("Selam");

// console.log(x());

// function makeDouble(num1, num2) {
//   num1 = num2;
//   return num1 * num2;
// }

// console.log(makeDouble(3, 5));

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function whichOne(num1, num2, callB) {
//     console.log(callB(num1,num2));
// }

// whichOne(4,6,multiply);


