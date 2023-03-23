// déclaration et initialisation de Z tableaux

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// création d'un nouveau tableau avec les valeurs des deux autres tableaux d'origines
let newArray = array3.concat(array4);
console.log(array3); // pas d'ajout de valeur dans le tableau3 d'origine
console.log(array4); // idem
console.log(newArray); // création d'un nouveau tableau avec les valeurs du tableau3 et du tableau4

let newArraySO = [...array3, ...array4]; // autre façon de faire avec le spread operator
console.log(newArraySO);

console.log(array3.join(' -> ')); // affichage des éléments du tableau avec la séparation indiqué en paramètre ici ->
console.log(array3.join('  ')); // affichage des éléments du tableau avec la séparation indiqué en paramètre ici espace

console.log(array3.slice(1)); // affichage de l'extraction de l'index 1 inclu au dernier index inclu
console.log(newArray.slice(1, 4)); // affichage de l'extraction de l'index 1 inclu à l'index 4 exclu

console.log(array3.indexOf("Python")); // donne l’index de « python » soit 2
array3.forEach((languages) => console.log(languages)); //applique forEach au tableau 3 et renvoi les valeurs de chaque index

console.log(array3.every((language) => language == "Php")); //tous les éléments du tableau3 doit vérifier la condition d'être php, pas tous les éléments sont php donc renvoit false
console.log(array3.some((language) => language == "Php")); // au moins un des éléments du tableau3 vérifie la condition il y a du php, donc renvoie true

let shift = array3.shift(); //supprime le premier element du tableau
console.log(array3);

console.log(array3.pop()); // supprime le dernier element du tableau et renvoi sa valeur
console.log(array3);

// .splice(index de depart, nb à supprimer, element à ajouter);

var mesPoissons = ["scalaire", "clown", "mandarin", "chirurgien"];// supprime 0 élément à partir de l'index 2, et insère "tambour"
var enleves = mesPoissons.splice(2, 0, "tambour");
enleves = mesPoissons.splice(3, 1); // supprime 1 élément à partir de l'index 3
enleves = mesPoissons.splice(2, 1, "trompette"); // supprime 1 élément à partir de l'index 2, et insère "trompette"
enleves = mesPoissons.splice(0, 2, "perroquet", "anémone", "bleu");// supprime 2 éléments à partir de l'index 0, et insère "perroquet", "anémone" et"bleu"
enleves = mesPoissons.splice(mesPoissons.length - 3, 2); // supprime 2 éléments à partir de l'indice 2
var mesPoissons = ["perroquet", "anémone", "bleu", "trompette", "chirurgien"];
enleves = mesPoissons.splice(2);// on retire les éléments à partir de l'indice 2 mesPoissons vaut ["perroquet", "anémone"] enleves vaut ["bleu", "trompette", "chirurgien"]

let arrayNumber = [4, 74, 28, 12, 1]; // fait la somme de la valeur de chaque élément du ttableau
arrayNumber.push(17); //ajoute 17 dans le tableau à la fin et renvoit la taille du tableau

let arrayNumber2 = [4, 74, 28, 12, 1, 17 , 8];
arrayNumber.filter((number) => number > 10); // permet de filtrer les éléments d'un tableau, ici nous renvoie un autre tableau avec les valeurs  supérieurs à 10

arrayNumber.sort();
console.log(arrayNumber); //sans autre précision la méthode tri selon la dizaine
arrayNumber.sort((a, b) => a - b); //le tri se fera par ordre croissant
arrayNumber.sort((a, b) => b - a); // le tri se fera par ordre décroissant