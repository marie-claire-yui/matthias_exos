// boucles while

//The syntax of a while loop is ideal when we don’t know in advance how many times the loop should run. 

let age = window.prompt("Quel est votre âge?");
// on demande à l'utilisateur de rentrer son âge, celui-ci sera stocké dans la variable âge
while (isNaN(age)){
    age= window.prompt("Merci de répondre un nombre. Quel est votre âge?");
}
console.log("Vous avez :" + age + " ans.");
// boucle while qui permet de répéter l'instruction tant que la condition entre () est vérifiée par true
// si l'âge n'est pas un nombre alors on répète l'instruction 
// si l'âge est un nombre alors on sort de la boucle et on affiche dans la console la valeur de la variable âge


let cpt = 0;
// déclaration et initialisation de la variable en même temps
while (cpt <= 20){ // tant que la condition entre () est renvoie TRUE
    cpt ++;        // on éxécute l'instruction entre {}
    console.log(cpt); // ce qui affichera le cpt de 1 à 21
}


//autre exemple de boucle while
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = "";
while (currentCard !== "spade"){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}




// boucles for

// déclaration et initialisation de la variable, ici un tableau ou liste
let liste = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];

for (let index= 0; index< liste.length; index++){ // déclaration et initialisation de la variable index
    console.log(liste[index]);
}

console.log(liste[index]); // renvoi le message d'erreur index is not defined
// la variable liste  est déclaré avec let
// la portée ou scope de let n'est utilisable que dans la structure dans laquelle elle a été déclarée
// ici , utilisable que dans la boucle d'où le message d'erreur lorsqu'on appelle la variable à l'extérieure de la boucle


// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >=0; counter--){
    console.log(counter);
  }




  // Do... While 

  //A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.
// Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

// first example
//the code block makes changes to the countString variable by appending the string form of the i variable to it. First, the code block after the do keyword is executed once. Then the condition is evaluated. If the condition evaluates to true, the block will execute again. The looping stops when the condition evaluates to false.
let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);


// second example
const firstMessage = 'I will print!';
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
// will console.log I will print because the instruction is executed at least once before the test condition


// the break keyword

// allows programs to “break” out of the loop from within the loop’s block.
// helpful when we’re looping through large data structures! With breaks, we can add test conditions besides the stopping condition, and exit the loop when they’re met.

// example1:
for (let i = 0; i < 99; i++) {
    if (i > 2 ) {
       break;
    }
    console.log('Banana.');
  }
   
  console.log('Orange you glad I broke out the loop!');


// exemple2:
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// affiche tous les rappers de la liste en arretant la boucle lorsqu'on rencontre le rapper Notorious BIG
for (let i = 0; i< rapperArray.length ; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.' ){
    break;
  }
}
console.log("And if you don't know, now you know.");