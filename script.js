
// ajouter un ecouteur d'évenement pour le formulaire avec l'ID 'userForm'.

document.getElementById('userForm').addEventListener('submit', (event) => {

    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire .

    const birthYear = parseInt(document.getElementById('birthYear').value); // Récupère l'année de naissance saisie par l'utilisateur et la convertir en entier. 

    const currentYear = new Date().getFullYear(); // Récupère l'année actuelle à partir de l'objet Date. 

    const age = currentYear - birthYear; // on Calcule l'âge en soustrayant l'année de la naissance de l'année actuelle.

    document.getElementById('result').innerText = `Vous avez ${age} ans.`; // Affiche l'âge avec l'ID 'result'.
    
   /* if ( age<18) {getElementById('result').innerText, "vous etes mineur";}
else{
    getElementById('result').innerText, "vous etes majeur";
}*/
});




/* document.getElementById('userForm').addEventListener('submit', function(event) {

    event.preventDefault(); // Empêche le rechargement de la page

    const firstName = document.getElementById('firstName').value; // Récupère le prénom

    const lastName = document.getElementById('lastName').value; // Récupère le nom

    const birthYear = parseInt(document.getElementById('birthYear').value); // Récupère l'année de naissance

    const currentYear = new Date().getFullYear(); // Récupère l'année actuelle

    const age = currentYear - birthYear; // Calcule l'âge

    document.getElementById('result').innerText = `Vous avez ${age} ans.`; // Affiche l'âge

    console.log(`Nom: ${lastName}, Prénom: ${firstName}, âge: ${age}`); // Affiche le nom et prénom dans la console

}); */

                      // 24/10

//1.Récuperer l'élément qui contient <input type="text" id="lastName".
const elementInputNom = document.querySelector("#lastName")
console.log(elementInputNom)


//2. Ecouter l'événement change,puis exécuter le code .
elementInputNom.addEventListener("change", () =>{
    console.log("==j'ai entendu change :-)");
})

const elementInputprenom = document.querySelector("#firstName")
console.log(elementInputprenom)


let messageSalutation

const elementMessageSalutation= document.querySelector("#messageSalutation")
elementInputprenom.addEventListener("change", (event) =>{
    console.log("le changement est :", event.target.value);
    console.log( "le change 2 est :", event.target.value);

   /* messageSalutation = `Bonjour ${event.target.value}  hâte de vous rencontrer !!!`;
    elementMessageSalutation.textContent = messageSalutation; */
}) 

// (jeu d'heure)   si il est avant 12h, alors il affiche le message "bounjour" suivi du prénom.
// si il est après 12h, alors il affiche le message "Bonsoir" suivi du prénom. 


/*const date = new Date ()
console.log("date :", date.getHours())

if(new Date < 12){
    messageSalutation=`Bonjour ${elementInputNom}`
}else{
    messageSalutation = `Bonsoir ${elementInputNom}`
}*/

elementInputprenom.addEventListener("change", () => {

    const prenom = elementInputprenom.value; // Récupère le prénom de l'utilisateur
    const currentHour = new Date().getHours(); // Récupère l'heure actuelle
 if (currentHour<12){
    messageSalutation=`Bonjour ${prenom}`;
 }else{messageSalutation= `Bonsoir ${prenom}`}

 elementMessageSalutation.innerText=messageSalutation});