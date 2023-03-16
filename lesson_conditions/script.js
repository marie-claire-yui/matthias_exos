// déclaration et initialisation(valeur entrée par l'utilisateur) de la variable
let age = window.prompt("Quel âge avez-vous?");

age = parseInt(age); // les valeurs rentrées même s'ils sont des nombres sont stockés en chaine de caractère lorsqu'on utilise un window.pront. On les converti alors en nombre grâce à la fonction parseInt()

//structure de contrôle de type condition if else
if(age === 18){ // si la condition entre () est TRUE
    console.log("vous avez 18 ans"); // on execute cette instruction qui est d'afficher vous avez 18 ans
} else { // dans tout autre cas, c'est à dire si la condition entre () est false ligne 7 
    console.log("vous êtes mineur ou vous avez plus de 18 ans") // on execute cette instruction, cad on affiche vous êtes mineur etc...
}

// = opérateur d'affectation

// les différents opérateurs de comparaison entre 2 variables
// renvoie soit TRUE soit false
// == Egal à (valeur identique)
// != différent de
// === Strictement égal à (valeur et type identique)
// !== Strictement différent
// > supérieur
// >= supérieur ou égal< inférieur
// <= inférieur ou égal

let chiffre = 10; // déclaration et initialisation/ affectation par le/du nombre 10
let chiffreStr = "10"; // déclaration et affectation de la chaine de caractère "10"
console.log(chiffre == chiffreStr); // renvoie TRUE car valeur sont identique
console.log(chiffre === chiffreStr); // renvoie FALSE car type ET valeur ne sont pas identique

// if... else if... else

if(age >=100){ // première condition entre les ()
    console.log("vous êtes centenaire"); // si la première condition est vérifiée alors éxécuter cette instruction
} else if ( age >= 18) { // deuxième condition
    console.log("vous êtes majeur") // si la deuxième condition est vérifiée alors éxécuter cette instruction
} else { // dans tous les autres cas alors
    console.log("vous êtes mineur"); // éxécuter cette instruction
}
// ici 130 vérifie à la fois la condition 1 et la condition 2, cependant la condition 1 apparait en premier alors c'est celle ci qui est prise en compte puis on sort de la sutrcture de contrôle if else



// conditions multiples

let prenom = "Raymond";
if(age >=100 && prenom ==="Raymond"){ // le && signifie ET, il faut que les conditions soient TRUE 
    console.log("Bonjour Raymond"); // pour que cette instruction s'éxécute
}

let first_name = "Raymond";
if(age >=100 || first_name ==="Raymond"){ // le || signifie OU, il faut que une condition au moins soit respectée TRUE 
    console.log("Bonjour Raymond first-name"); // pour que cette instruction s'éxécute
}


// la condition switch
// à utiliser lorsqu'on teste uniquement l'égalité < et > etc ne sont pas utilisable ici

let number = window.prompt("Choisissez un nombre entre 1 et 4"); // déclaration et initialisation de la variable, stockage de la valeur rentré par l'utilisateur dans la variable
number = parseInt(number); // le window prompt stocke une valeur rentré en int en string donc on converti le str en int
switch(number){ // entre () variable que l'on souhaite comparer
    case 1: // cas où la variable serait égal à 1
        console.log("Vous avez gagnez un stylo!"); // instruction
        break; // sortir du switch quand cas = 1 vérifié (execute tout le switch s'il n'y a pas de break)
    case 2: // cas où la variable serait égal à 2
        console.log("Vous avez gagnez un voyage"); // instruction
        break; //sortir du switch
    case 3: 
        console.log("Vous avez gagnez une montre");
        break;
    case 4:
        console.log("Vous avez gagnez un ballon");
        break;
    default: // cas où tout les autres cas
        console.log("Vous n'avez pas saisi le bon nombre"); // instruction
        break; // sortir du switch
}

let voiture = window.prompt("Ecrire une marque de voiture parmi porsche, mercedes, toyota:");
switch (voiture){ // on compare la variable à une chaîne de caractère
    case "porsche": // cas où la variable égal à porsche
        console.log("La porsche est une jolie voiture"); // instruction
        break; // sortir de la switch
    case 'mercedes':
        console.log("la mercedes... deutch technologie lol");
        break; // sortir de la switch
    case "toyota":
        console.log("meilleur voiture qualité prix");
        break; // sortir de la switch
}

let nombre = window.prompt("Ecrire une valeur entre 1 et 8");
nombre= parseInt(nombre);
switch(nombre){
    case 1: case 5: // on définit une même action pour plusieurs valeurs différentes
        console.log("Vous avez gagnez un stylo!"); //instruction
        break; // sortir de la switch
    case 2: case 6:
        console.log("Vous avez gagnez un voyage!");
        break;
    case 3: case 7:
        console.log("Vous avez gagnez un ballon!");
        break;
    case 4: case 8:
        console.log("Vous avez gagnez une montre!");
    default:
        console.log("Vous n'avez pas saisi le bon nombre");
        break;
}

