//objet window = fenêtre
// dom Document Object Model = structure du fichier html (permet d'atteindre les différents éléments hu html et de pouvoir agir dessus en JS)
console.log(window); //existence de la fenêtre avec son adresse http://127.0.0.1:5500
console.log(window.history); //historique de la fenêtre
console.log(window.innerWidth);//largeur de la fenêtre
console.log(window.innerHeight);//hauteur de la fenêtre

// séléction d'éléments

let divUne = document.getElementById("maPremiereDiv"); // méthode de sélection d'un élément par son ID
divUne.style.backgroundColor='lightgrey'; // modification de la couleur de fond
divUne.style.padding='2em'; // modification du padding

        // RQ: les propriétés CSS en plusieurs mots habituellement sont transformées en camelCase pour la manipulation en JS

//let divUne = document.querySelector("#maPremiereDiv"); // sélection des éléments du DOM avec un sélecteur CSS
//let divUne = document.querySelector("div:nth-child(1)"); // sélection des éléments du DOM avec des sélecteurs plus complexes

//let divs = document.querySelectorAll("div"); // sélection de plusieurs éléments du DOM simultanément, ici toutes les divs


//addEventListener
// https://devdocs.io/dom-events/

function onClick2(){
    alert('coucou');
}
// onClick2();

function onClick1(){
    let titre = document.querySelectorAll('h2'); //store in variable all h2 selected in the html
    for(var i=0;i<titre.length;i++){ // boucle qui parcourt tous les h2 de la variable objet titre 
        titre[i].classList.toggle("blue"); // toggle = add or remove the value of a class
        //console.log(typeof titre); // renvoit un objet
    }
}

var toggleColor = false;

function changerCouleur(){
    // var maDiv=document.getElementById('maPremiereDiv');
    // maDiv.classList.toggle("backgroundfonce");
    let divUne = document.getElementById("maPremiereDiv"); // méthode de sélection d'un élément par son ID
    toggleColor?divUne.style.backgroundColor='indigo':divUne.style.backgroundColor='lightgrey';
    divUne.style.padding='1em'; // modification du padding
    toggleColor = !toggleColor;
}




document.addEventListener('DOMContentLoaded',function(){
    console.log('le dom est chargé');

    let button2=document.querySelector('#buttonTitle');
    let button1=document.getElementById('changerBackground');

    button2.addEventListener('click',onClick1);
    button1.addEventListener('click', changerCouleur);

 //   button2.removeEventListener('click', onClick1);
})

// la propriété classList sert à gérer les classes des balises Html, accessible et gérable avec javaSvript
// monElement.classList.add('maClasse'); // ajoute une classe
// monElement.classList.remove('maClasse'); // enlève une classe
// monElement.classList.toggle('maClasse'); // ajoute ou enlève une classe
// monElement.classList.length // retourne le nombre de classe que l'élément contient
// monElement.classList.contains('maClasse'); // retourne true si mon élément contient la classe ou false dans le cas contraire 
 
// objet monElement propriété classList et méthodes add etc




// la variable this
// dans un gestionnaire d'évènement, la variable this représente l'objet Dom qui a déclenché l'évènement

let divs = document.querySelectorAll('div');
for(var j=0;j<divs.length;j++){
divs[j].addEventListener('mouseover',changerText);
}
//console.log(typeof divs); //object
function changerText(){
    this.classList.add('green');
}

// text content et innerHTML

let  madiv = document.getElementById('maDiv');
alert(madiv.textContent);
madiv.textContent="bonjour tout le monde!";
//madiv.innerHTML="<strong>bonjour tout le monde</strong>"; // le innerHTML interprète le code HTML compris dans la variable




