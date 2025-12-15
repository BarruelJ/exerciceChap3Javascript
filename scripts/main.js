/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/
let texteUtilisateur = document.getElementById("inputEcriture")
console.log(texteUtilisateur)

let boutonValide = document.getElementById("btnValiderMot")
console.log(boutonValide)

let motProposer = document.querySelector(".zoneProposition")
console.log(motProposer)

let afficheScore = document.querySelector(".zoneScore span")
console.log(afficheScore)

let boutonChoix = document.querySelectorAll(".optionSource input")
console.log(boutonChoix)

// lancerJeu()