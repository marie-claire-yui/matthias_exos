
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


//creating factory functions.
//using destructuring techniques.
