// const students = [
//   {
//     fullName: "Berkay Turna",
//     age: 25,
//     isDeleted: false,
//     isActive: true,
//     courses: ["JavaScript", "React", "Node.js"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Hicran Ertugral", topics: ["TypeScript", "Angular"] },
//     ],
//   },
//   {
//     fullName: "Cenk Grid Kaynak",
//     age: 32,
//     isDeleted: false,
//     isActive: true,
//     courses: ["JavaScript", "React Native", ".Net Core"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Korhan Kosece", topics: [".Net Core"] },
//     ],
//   },
//   {
//     fullName: "Ali Riza Taskiran",
//     age: 24,
//     isDeleted: false,
//     isActive: true,
//     courses: ["Java", "Golang"],
//     instructors: [
//       { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
//       { fullName: "Buse Seker", topics: ["Problem Solving"] },
//     ],
//   },
//   {
//     fullName: "Mert Kirant",
//     age: 32,
//     isDeleted: false,
//     isActive: true,
//     courses: ["Expressjs", "Node.js"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Onder Tarım", topics: ["React Native"] },
//     ],
//   },
//   {
//     fullName: "Firat Can Tas",
//     age: 26,
//     isDeleted: false,
//     isActive: false,
//     courses: ["Expressjs", "Node.js", ".Net Core"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Onder Tarım", topics: ["React Native"] },
//     ],
//   },
//   {
//     fullName: "Baris Peker",
//     age: 38,
//     isDeleted: true,
//     isActive: false,
//     courses: ["JavaScript", "HTML"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Onder Tarım", topics: ["React Native"] },
//     ],
//   },
// ];

// //forEach

// const result = students.forEach((student, index) =>
//   console.log(`coursesIndex ${index}: <${student.fullName}> ${student.courses}`)
// );

// const result2 = students.forEach((student, index) =>
//   console.log(`${index} ${student.isDeleted}`)
// );

// //map

// const newStu = students.map((student) => student.courses);

// console.log(newStu.flat());

// const newStd = students.map((stu) => stu.age);
// console.log(newStd);

// //filter

// console.log(
//   students.filter((student) => !student.isDeleted && student.isActive)
// );

// const students = [
//   {
//     fullName: "Berkay Turna",
//     age: 25,
//     isDeleted: false,
//     score: 90,
//     isActive: true,
//     courses: ["JavaScript", "React", "Node.js"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Hicran Ertugral", topics: ["TypeScript", "Angular"] },
//     ],
//   },
//   {
//     fullName: "Cenk Grid Kaynak",
//     age: 32,
//     isDeleted: false,
//     score: 85,
//     isActive: true,
//     courses: ["JavaScript", "React Native", ".Net Core"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Korhan Kosece", topics: [".Net Core"] },
//     ],
//   },
//   {
//     fullName: "Ali Riza Taskiran",
//     age: 24,
//     isDeleted: false,
//     score: 92,
//     isActive: true,
//     courses: ["Java", "Golang"],
//     instructors: [
//       { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
//       { fullName: "Buse Seker", topics: ["Problem Solving"] },
//     ],
//   },
//   {
//     fullName: "Mert Kirant",
//     age: 23,
//     isDeleted: false,
//     score: 88,
//     isActive: true,
//     courses: ["Expressjs", "Node.js"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Onder Tarım", topics: ["React Native"] },
//     ],
//   },
//   {
//     fullName: "Firat Can Tas",
//     age: 24,
//     isDeleted: false,
//     score: 60,
//     isActive: false,
//     courses: ["Expressjs", "Node.js", ".Net Core"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Onder Tarım", topics: ["React Native"] },
//     ],
//   },
//   {
//     fullName: "Baris Peker",
//     age: 38,
//     isDeleted: true,
//     score: 75,
//     isActive: false,
//     courses: ["JavaScript", "HTNL"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Onder Tarım", topics: ["React Native"] },
//     ],
//   },
// ];

// const isAnyScoreOver82 = students.some((student) => student.score > 82);
// const isAnyScoreOver95 = students.some((student) => {
//   return student.score > 95;
// });

// console.log(isAnyScoreOver82, isAnyScoreOver95);

// const isEveryStudentActive = students.every(
//   (student) => student.isActive === true
// );

// console.log(isEveryStudentActive);

// const whereIsBerkay = students.find(
//   (student) => student.fullName === "Berkay Turna"
// );

// console.log(whereIsBerkay);

// const indexOfBerkay = students.findIndex(
//   (student) => student.fullName === "Berkay Turna"
// );

// console.log(indexOfBerkay);

// const students = [
//   {
//     fullName: "Berkay Turna",
//     age: 25,
//     isDeleted: false,
//     score: 90,
//     isActive: true,
//     courses: ["JavaScript", "React", "Node.js"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Hicran Ertugral", topics: ["TypeScript", "Angular"] },
//     ],
//   },
//   {
//     fullName: "Cenk Grid Kaynak",
//     age: 32,
//     isDeleted: false,
//     score: 85,
//     isActive: true,
//     courses: ["JavaScript", "React Native", ".Net Core"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Korhan Kosece", topics: [".Net Core"] },
//     ],
//   },
//   {
//     fullName: "ali Riza Taskiran",
//     age: 24,
//     isDeleted: false,
//     score: 92,
//     isActive: true,
//     courses: ["Java", "Golang"],
//     instructors: [
//       { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
//       { fullName: "Buse Seker", topics: ["Problem Solving"] },
//     ],
//   },
//   {
//     fullName: "Hakan Berke Temur",
//     age: 24,
//     isDeleted: false,
//     score: 92,
//     isActive: true,
//     courses: ["Java", "Golang"],
//     instructors: [
//       { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
//       { fullName: "Buse Seker", topics: ["Problem Solving"] },
//     ],
//   },
//   {
//     fullName: "Barkin Sayin",
//     age: 22,
//     isDeleted: false,
//     score: 92,
//     isActive: true,
//     courses: ["Java", "Golang"],
//     instructors: [
//       { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
//       { fullName: "Buse Seker", topics: ["Problem Solving"] },
//     ],
//   },
//   {
//     fullName: "Mert Kirant",
//     age: 23,
//     isDeleted: false,
//     score: 88,
//     isActive: true,
//     courses: ["Expressjs", "Node.js"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Onder Tarım", topics: ["React Native"] },
//     ],
//   },
//   {
//     fullName: "Onur Ege Erkek",
//     age: 23,
//     isDeleted: false,
//     score: 88,
//     isActive: true,
//     courses: ["Expressjs", "Node.js"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Onder Tarım", topics: ["React Native"] },
//     ],
//   },
//   {
//     fullName: "Firat Can Tas",
//     age: 24,
//     isDeleted: false,
//     score: 91,
//     isActive: false,
//     courses: ["Expressjs", "Node.js", ".Net Core"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Onder Tarım", topics: ["React Native"] },
//     ],
//   },
//   {
//     fullName: "Ceren Dincer",
//     age: 27,
//     isDeleted: false,
//     score: 75,
//     isActive: true,
//     courses: ["JavaScript", "HTNL"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Onder Tarım", topics: ["React Native"] },
//     ],
//   },
//   {
//     fullName: "Baris Peker",
//     age: 38,
//     isDeleted: true,
//     score: 75,
//     isActive: false,
//     courses: ["JavaScript", "HTNL"],
//     instructors: [
//       { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
//       { fullName: "Onder Tarım", topics: ["React Native"] },
//     ],
//   },
// ];
// const lowerCaseStudentNames = students.map((student)=>student.fullName.toLowerCase());

// console.log(lowerCaseStudentNames);   

// const sortStudentsByName = students.sort((a,b)=>a.fullName>b.fullName ? 1 : -1);

// console.log(sortStudentsByName);

// const sortStudentsByScore = students.sort((a,b)=> (a.score-b.score));

// console.log(sortStudentsByScore);

const numbers = [3,9,7,6,8,10,20,23,89,97];

//dizideki çift sayıları 5 ile çarpıp topla
function getEvenNums(element) {
  if (!(element % 2)) {
    return true;
  }
};

function getNumsMultiply5(arr, callback) {
  const newArr = [];
  arr.forEach((element) => {
    if (callback(element)) {
      newArr.push(element*5);
    }
  });
  return newArr;
};

console.log(getNumsMultiply5(numbers,getEvenNums));

const newArr = getNumsMultiply5(numbers,getEvenNums);

const total = newArr.reduce((acc,number)=> acc + number);

console.log(total);

// function sumEvenMultiply(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     if (num % 2 === 0) {
//       sum += num * 5;
//     }
//   }
//   return sum;
// }

// const result = sumEvenMultiply(numbers);
// console.log(result);
