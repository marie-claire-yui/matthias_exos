
//how to use the this keyword.

const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType);
    }
  };

  goat.makeSound(); // Prints baaa
  goat.diet();  // Output: herbivore
  // dietType not defined even though it’s a property of goat  because inside the scope of the .diet() method, we don’t automatically have access to other properties of the goat object. 
  //The this keyword references the calling object which provides access to the calling object’s properties.
  // In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation. 
 // the calling object is the object the method belongs to.

// Arrow Functions and this
const goat2 = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet: () => {
      console.log(this.dietType);
    }
  };
   
  goat2.diet(); // Prints undefined
// Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object
// the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined. 

//privacy
// Accessing and updating properties is fundamental in working with objects.
// there are cases in which we don’t want other code simply accessing and updating an object’s properties
// When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.
const robot = {
    _energyLevel: 100, //  One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered.
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };

  robot._energyLevel = 'high'; // but it is altered so we can change the value (here from number to string) so we can change properties that don’t have setters or getters.
  robot.recharge(); // prints Recharged! Energy is currently at high30%.
//  a funky string is printed to the console! This is known as a side-effect of type-coercion. 


//defining getters and setters in objects.
// Getters are methods that get and return the internal properties of an object.
//Il est parfois utile de créer une propriété qui renvoie une valeur dynamique calculée, ou de ne pas avoir recours à l'appel explicite d'une méthode pour 
//renvoyer le statut d'une variable interne. En JavaScript, il est possible de faire cela en 
//utilisant un accesseur. Il n'est pas possible d'avoir simultanément un accesseur assimilé à une propriété et d'avoir cette propriété initialisée à une valeur, 
//mais il est possible d'utiliser un accesseur et un mutateur pour créer une sorte de pseudo-propriété.
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() { // get keyword followed by a function.
    if (this._firstName && this._lastName){ //We can access the calling object’s internal properties using this. In fullName, we’re accessing both this._firstName and this._lastName.
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
// To call the getter method: 
console.log(person.fullName); // 'John Doe'  
//In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.
//properties cannot share the same name as the getter/setter function.  Calling the method will result in an infinite call stack error


// setters methods
// reassign values of existing properties within an object
const person2 = {
  _age: 37,
  set age(newAge){ 
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
//Setter methods like age do not need to be called with a set of parentheses. Syntactically, it looks like we’re reassigning the value of a property. 
person.age = 40;// When we use the setter method, only values that are numbers will reassign this._age
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
//Like getter methods, there are similar advantages to using setter methods that include checking input, performing actions on properties,
//  and displaying a clear intention for how the object is supposed to be used. 


//creating factory functions.
//  create many instances of an object quickly using a foctory function
// A factory function is a function that returns an object and can be reused to make multiple object instances. 
// Factory functions can also have parameters allowing us to customize the object that gets returned.
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
// In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare().
// To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
//With monsterFactory in place, we don’t have to create an object literal every time we need a new monster. Instead, we can invoke the monsterFactory function with the necessary arguments


// Property Value Shorthand using destructuring techniques.
const monsterFactoryD = (name, age, energySource, catchPhrase) => {
  return { 
    name,
    age, 
    energySource
  }
}; // equivalent de monsterFactory sans la méthode scare()


// destructured assignment
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
// extraction of the residence property as a variable
const name = vampire.name; 
console.log(name); // Prints 'Transylvania' 
// or we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. 
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'
// We can even use destructured assignment to grab nested properties of an object:
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

// other example of destructured Assignment
const robot1 = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const { functionality } = robot1;
functionality.beep();


// Built-in Object Methods
//  MDN’s object instance documentation. 
const robot2 = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot2);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot2);
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot2); //Declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot and the properties in the following object: {laserBlaster: true, voiceRecognition: true}
console.log(newRobot);




//The object that a method belongs to is called the calling object.
//The this keyword refers to the calling object and can be used to access properties of the calling object.
// Methods do not automatically have access to other internal properties of the calling object.
// The value of this depends on where the this is being accessed from. 
// We cannot use arrow functions as methods if we want to access other internal properties.
// JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code. 
// The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed. 
// Setters and getter methods allow for more detailed ways of accessing and assigning properties.
// Factory functions allow us to create object instances quickly and repeatedly. 
// There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment. 
// As with any concept, it is a good skill to learn how to use the documentation with objects!