// boucles while

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