//Record Collection

const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  function updateRecords(records, id, prop, value) {
  
    if (value) {
      if (prop === "tracks") {
        records[id][prop] = records[id][prop] || [];
        value && records[id][prop].push(value);
      } else {
        records[id][prop] = value;
      }
    }
    else delete records[id][prop];
  
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');



  //Profile Lookup

const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  for(let i=0; i<contacts.length; i++){
    if(name===contacts[i].firstName){
      if(contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
      }else{
        return "No such property";
      }
    }
  }
  return "No such contact";
  }


  
  // const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers;

// newNumbers.pop();
// newNumbers.push(8);

// console.log(numbers);
// console.log(newNumbers);

// const students = ["Ali", "Berkay", "Ceren", "Barkın"];

// const newStudents = [...students];

// newStudents.shift();
// newStudents.pop();

// console.log(students);
// console.log(newStudents);

// const patients = [
//   { name: "Torpil", age: 1 },
//   {
//     name: "Paşa",
//     age: 11,
//   },
// ];

// const newPatient = [...patients, { name: "Felix", age: 12 }];

// console.log(newPatient);
// console.log(patients);

const patient = {
  name: "Paşa",
  age: 12,
  type: "it",
  breed: "golden retriever",
  hobbies: ["top", "yüzme", "havlama"]
}

// const newPatient = {...patient};
// patient.hobbies[1] = "ağaç sulamak"; //SOFT

const newPatient = JSON.parse(JSON.stringify(patient)); 
patient.hobbies[2] = "değişti bak"; //HARD
console.log(patient);
console.log(newPatient);