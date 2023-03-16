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