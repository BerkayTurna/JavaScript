// const ali = "veli";
// let deli;

// deli=ali;
// deli = "zeli";

// console.log(deli);
// console.log(ali);

const ogrenciler = ["Ali", "Barkın", "Berkay", "Cenk", "Çağatay"];

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

function isPalindrome(word) {
  let result = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      result = false;
      break;
    }
    console.log(result);
  }
  return result;
}

console.log(isPalindrome("ava"));


//