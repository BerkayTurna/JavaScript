//Record Collection

// Setup
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
  
  // Only change code below this line
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

  // Setup
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
    // Only change code above this line
  }