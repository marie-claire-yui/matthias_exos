const client = {
    prenom:"Jean",
    nom:"Pierre",
    telephone:"0645124512",
    email:"jeanpierre@gmail.com"
};

// un objet s'ouvre avec des accolades, le nom des propriétés suivi de : puis d'une valeur

client.ville ="Lille"; // pour rajouter un champ, une nouvelle instruction, le nom de la variable qui contient l'objet, un "." est égal à une valeur
client.telephone="0678412541"; // pour changer une valeur: nous appelons la clé de l'objet dont nous voulons changer la valeur puis nous lui affetons une nouvelle valeur
console.log(client);// lire un objet
console.log(client.nom); // lire la valeur de la clé nom de l'objet client


// OBJECTS LITERALS
// curly braces, {}, to designate an object literal:
//We fill an object with unordered data. 
// This data is organized into key-value pairs. A key is like a variable name that points to a location in memory that holds a value.
// A key’s value can be of any data type in the language including functions or other objects

let spaceship = { 
    'Fuel Type': 'diesel', // We make a key-value pair by writing the key’s name, or identifier, followed by a colon and then the value. We separate each key-value pair in an object literal with a comma (,).
    color: 'silver', //Keys are strings, but when we have a key that does not have any special characters in it, JavaScript allows us to omit the quotation marks
    'Activity Duty': true,
    'Active Mission' : true,
    homePlanet: 'Earth',
    numCrew:5,
    type : 'shuttle',
    mission: 'Explore the universe' 
};

// accessing properties
// With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key):
// If we try to access a property that does not exist on that object, undefined will be returned.
console.log(spaceship.color);
console.log(spaceship.home);
//To use bracket notation to access an object’s property, we pass in the property name (key) as a string.
console.log(spaceship['Fuel Type']);
// With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:
let returnAnyProp = (objectName, propName) => objectName[propName];
console.log(returnAnyProp(spaceship, 'homePlanet')); // Returns 'Earth
// indirect way to access the value of a property
let propName =  'Active Mission';
console.log(spaceship[propName]); // true


// property assignment
//Objects are mutable meaning we can update them after we create them! 
spaceship['Fuel Type'] = 'vegetable oil';
spaceship.color = 'gold';
// If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
// If there was no property with that name, a new property will be added to the object. 
spaceship['Secret Mission'] = 'Discover life outside of Earth';
// check re assignment
console.log(spaceship["Fuel Type"]);
console.log(spaceship.color);
console.log(spaceship['Secret Mission']);

// It’s important to know that although we can’t reassign an object declared with const, 
//we can still mutate it, meaning we can add new properties and change the properties that are there.
//spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable when console.log it
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

//You can delete a property from an object with the delete operator. 
delete spaceship.mission;
console.log(spaceship);

//methods 
//When the data stored on an object is a function we call that a method.
const alienShip = {
    invade: function () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    },
    invade2 () { 
        console.log('Hello! World.')
      }
  };
  console.log(alienShip.invade());
  console.log(alienShip.invade2());


// nested objects
const spaceShip = {
    telescope: {
       yearBuilt: 2018,
       model: '91031-XLT',
       focalLength: 2032 
    },
   crew: {
       captain: { 
           name: 'Sandra', 
           degree: 'Computer Engineering', 
           encourageTeam() { console.log('We got this!') } 
        }
   },
   engine: {
       model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
           terabytes: 100,
           monitors: 'HD'
        },
       'back-up': {
          battery: 'Lithium',
          terabytes: 50
        }
   }
}; 
//First the computer evaluates spaceship.nanoelectronics, which results in an object containing the back-up and computer objects. We accessed the back-up object by appending ['back-up']. The back-up object has a battery property, accessed with .battery which returned the value stored there: 'Lithium'
spaceShip.nanoelectronics['back-up'].battery; // Returns 'Lithium'


// pass by reference
// Objects are passed by reference.
//  means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object.

const spaceshipp = {
    homePlanet : 'Earth',
    color : 'silver'
  };
   
  let paintIt = obj => {
    obj.color = 'glorious gold'
  };
   
  paintIt(spaceshipp);
   
  console.log(spaceshipp.color); // Returns 'glorious gold'



let spaceshippp = {
    homePlanet : 'Earth',
    color : 'red'
  };
  let tryReassignment = obj => {
    obj = {
      identified : false, 
      'transport type' : 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
   
  };
  tryReassignment(spaceshippp) // The attempt at reassignment does not work. obj became a reference to the memory location of the spaceship object, but not to the spaceship variable. This is because the obj parameter of the tryReassignment() function is a variable in its own right. The body of tryReassignment() has no knowledge of the spaceship variable at all! 
  console.log(spaceshippp) // Still returns {homePlanet : 'Earth', color : 'red'};
   
  spaceshippp = {
    identified : false, 
    'transport type': 'flying'
  }; // Regular reassignment still works
console.log(spaceshippp);

// looping through objects
let spaceship2 = {
    crew: {
      captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
      },
      'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
      },
      medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
      translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
      }
    }
  }; 
   
  // for...in
  // access to they key of the object by a for... in loop "let key in object"
  for (let crewMember in spaceship2.crew) {
    console.log(`${crewMember}: ${spaceship2.crew[crewMember].name}`);
  }

  