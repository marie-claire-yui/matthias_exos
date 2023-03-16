//objet window = fenêtre

console.log(window); //existence de la fenêtre avec son adresse http://127.0.0.1:5500
console.log(window.history); //historique de la fenêtre
console.log(window.innerWidth);//largeur de la fenêtre
console.log(window.innerHeight);//hauteur de la fenêtre

// séléction d'éléments

let divUne = document.getElementById("maPremiereDiv"); // méthode de sélection d'un élément par son ID
divUne.style.backgroundColor='lightgrey'; // modification de la couleur de fond
divUne.style.padding='1em'; // modification du padding

        // RQ: les propriétés CSS en plusieurs mots habituellement sont transformées en camelCase pour la manipulation en JS

//let divUne = document.querySelector("#maPremiereDiv"); // sélection des éléments du DOM avec un sélecteur CSS
//let divUne = document.querySelector("div:nth-child(1)"); // sélection des éléments du DOM avec des sélecteurs plus complexes

let divs = document.querySelectorAll("div"); // sélection de plusieurs éléments du DOM simultanément, ici toutes les divs


//addEventListener
// https://devdocs.io/dom-events/

function onClick2(){
    alert('coucou');
}

// onClick2();
function onClick1(){
    let titre = document.querySelectorAll('h2');
    for(var i=0;i<titre.length;i++){
        titre[i].classList.toggle("blue");
    }
}

function changerCouleur(){
    var maDiv=document.getElementById('maPremiereDiv');
    maDiv.classList.toggle("backgroundfonce");
}




document.addEventListener('DOMContentLoaded',function(){
    console.log('le dom est chargé');

    let button2=document.querySelector('#buttonTitle');
    let button1=document.getElementById('changerBackground');

    button2.addEventListener('click',onClick1);
    button1.addEventListener('click',changerCouleur);
})





