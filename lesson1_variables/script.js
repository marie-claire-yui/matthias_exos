let mapremiereVariable = "Bonjour!";


// affichage 
console.log(mapremiereVariable); // affichage de la valeur de la variable dans la console
document.write(mapremiereVariable); // affichage dans le navigateur
alert(mapremiereVariable); // affichage dans une pop up

let age = window.prompt("quel âge avez-vous?:"); // ouvre une boîte de dialogue pour demander à l'utilisateur de rentrer une info et stocke dans la variable sous type string
console.log(age);

// concaténation
let nom = "kasai";
let prenom ="yui";
console.log(nom + prenom);

// les variables

let firstname ="David"; //initialisation en même temps que la déclaration de variable

let lastname; // déclaration de la variable lastname
lastname ="Off" // puis initialisation de la variable

let titre ="jumanji", production ="universal studio", annee = 2017;
// déclaration et initialisation de plusieurs variables en même temps grâce à la virgule



jeux ="mario"; // remontée ou hoisting des variables (rq déconseillé)
var jeux;
console.log(jeux);