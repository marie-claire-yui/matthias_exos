const color = 'blue';
 
const returnSkyColor = () => {
  return color; // blue 
};
 
console.log(returnSkyColor()); // blue




const logSkyColor = () => {
    let color = 'blue'; 
    console.log(color); // Prints "blue"
  };
   
  logSkyColor(); // Prints "blue"
  console.log(color); // throws a ReferenceError


//   Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes
let num = 50;
 
const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};
 
logNum(); // Prints 100
console.log(num); // Prints 100




const logSkyColor2 = () => {
    const dusk = true;
    let color = 'blue'; 
    if (dusk) {
      let color = 'pink';
      console.log(color); // Prints "pink"
    }
    console.log(color); // Prints "blue"
  };
   
  console.log(color); // throws a ReferenceError


