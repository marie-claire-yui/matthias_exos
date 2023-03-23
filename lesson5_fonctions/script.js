// fonction 

function sayHello(nom,prenom){  //function pour créer une fonction du nom de sayHello avec les arguments nom et prenom qu'on lui donne
    const hello = `Bonjour ${prenom} ${nom}`; // stockage des nom et prénom rentré en paramètre dans la variable Hello
    return hello; // la fonction /répond/retourne le Bonjoru prenom nom
}

const result = sayHello("Vilport","Cécile"); // on rentre nom et prénom dans les paramètres en appelant la fonction et en la stockant dans la variable result
console.log(result); // et on affiche le résultat retourner par la fonction sayHello

// rq1: les arguments sont optionnels, en absence d'arguments on aura les () vide
// rq2: return est optionnel, il se peut qu'une fonction ne réponde rien et fait ce que lui demande en instrucction uniquement
// rq3: return permet aussi de stopper la fonction, le code présent après retourn ne sera pas exécuté

function sayHelloo(nom,prenom ="unknown"){  //function pour créer une fonction du nom de sayHello avec les arguments nom et prenom qu'on lui donne
    const hello = `Bonjour ${prenom} ${nom}`; // stockage des nom et prénom rentré en paramètre dans la variable Hello
    return hello; // la fonction /répond/retourne le Bonjoru prenom nom
}

const results = sayHelloo("Vilport"); // on rentre nom et rien dans les paramètres en appelant la fonction et en la stockant dans la variable results
console.log(results);  // affichera la valeur unknown par défaut dans l'argument des paramètres vide



// fonction codecademy js

//déclaration d'une fonction  sans paramètres
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
  }
sayThanks(); // appelle de la fonction

// fonction avec paramètres
function calculateArea(width,height){
    console.log(width*height);
}
calculateArea(2,3); //appel de la fonction
// arguments: valeurs entre(), valeurs passées en paramètres à la fonction, doivent être renseigné dans l'ordre

// fonction avec paramètres, arguments: variables passées en paramètres
const rectWidth = 10; // déclaration de variables
const rectHeight = 6;
calculateArea(rectWidth,rectHeight); // appel de la fonction avec les variables passés en paramètres

// fonction avec paramètres par défaut
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!
  //Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.



  // fonction return
  function rectangleArea(width, height) {
    let area = width * height;
  }
  console.log(rectangleArea(5, 7)) // Prints undefined because the fonction works and calculate but the value is not captured by the computer
// if the value is omitted, undefined is returned instead.

  function rectangleArea(width, height) {
    console.log(width * height); // retourne un résultat car il y a un console.log à l'intérieur du corps de la fonction
  }
 (rectangleArea(5, 7)); // Prints 35

 function rectanglArea(width,height){
    const area = width * height;
    return area; // mot clé return pour capturer la valeur calculé par l'instruction
 }
 console.log(rectanglArea(3,5)); // prints 15


 function rectangArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }
  console.log(rectangArea(3,3)); // prints 9
  //return statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed
  // If an argument for width or height is less than 0, then rectangleArea() will return 'You need positive integers to calculate area!'. The second return statement width * height will not run. 


  // Helper Functions
  //We can also use the return value of a function inside another function
  //each function is carrying out a specific task, it makes our code easier to read and debug if necessary.
  function multiplyByNineFifths(number) {
    return number * (9/5);
  };
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
  console.log(getFahrenheit(15)); // Returns 59