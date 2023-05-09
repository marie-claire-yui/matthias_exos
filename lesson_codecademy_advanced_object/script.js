
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
//creating factory functions.
//using destructuring techniques.
