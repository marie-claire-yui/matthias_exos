const client = {
    prenom:"Jean",
    nom:"Pierre",
    telephone:"0645124512",
    email:"jeanpierre@gmail.com"
};

// un objet s'ouvre avec des accolades, le nom des propriétés suivi de : puis d'une valeur

client.ville ="Lille"; // pour rajouter un champ, une nouvelle instruction, le nom de la variable qui contient l'objet, un "." est égal à une valeur
client.telephone="0678412541"; // pour changer une valeur: nous appelons la clé de l'objet dont nous voulons changer la valeur puis nous lui affetons une nouvelle valeur
console.log(client);// lire un objet
console.log(client.nom); // lire la valeur de la clé nom de l'objet client