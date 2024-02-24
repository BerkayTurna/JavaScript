const students = [
  {
    fullName: "Berkay Turna",
    age: 25,
    isDeleted: false,
    isActive: true,
    courses: ["JavaScript", "React", "Node.js"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Hicran Ertugral", topics: ["TypeScript", "Angular"] },
    ],
  },
  {
    fullName: "Cenk Grid Kaynak",
    age: 32,
    isDeleted: false,
    isActive: true,
    courses: ["JavaScript", "React Native", ".Net Core"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Korhan Kosece", topics: [".Net Core"] },
    ],
  },
  {
    fullName: "Ali Riza Taskiran",
    age: 24,
    isDeleted: false,
    isActive: true,
    courses: ["Java", "Golang"],
    instructors: [
      { fullName: "Akin Kaldiroglu", topics: ["Spring", "C++"] },
      { fullName: "Buse Seker", topics: ["Problem Solving"] },
    ],
  },
  {
    fullName: "Mert Kirant",
    age: 32,
    isDeleted: false,
    isActive: true,
    courses: ["Expressjs", "Node.js"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Onder Tarım", topics: ["React Native"] },
    ],
  },
  {
    fullName: "Firat Can Tas",
    age: 26,
    isDeleted: false,
    isActive: false,
    courses: ["Expressjs", "Node.js", ".Net Core"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Onder Tarım", topics: ["React Native"] },
    ],
  },
  {
    fullName: "Baris Peker",
    age: 38,
    isDeleted: true,
    isActive: false,
    courses: ["JavaScript", "HTNL"],
    instructors: [
      { fullName: "Orkun Durmaz", topics: ["JavaScript", "React"] },
      { fullName: "Onder Tarım", topics: ["React Native"] },
    ],
  },
];

//forEach

const result = students.forEach((student, index) =>
  console.log(`coursesIndex ${index}: <${student.fullName}> ${student.courses}`)
);

//map

const newStu = students.map((student) => student.courses);

console.log(newStu);

//filter

console.log(students.filter((student) => !student.isDeleted && student.isActive));
