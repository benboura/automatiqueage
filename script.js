
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



document.getElementById('userForm').addEventListener('submit', function(event) {

    event.preventDefault(); // Empêche le rechargement de la page

    const firstName = document.getElementById('firstName').value; // Récupère le prénom

    const lastName = document.getElementById('lastName').value; // Récupère le nom

    const birthYear = parseInt(document.getElementById('birthYear').value); // Récupère l'année de naissance

    const currentYear = new Date().getFullYear(); // Récupère l'année actuelle

    const age = currentYear - birthYear; // Calcule l'âge

    document.getElementById('result').innerText = `Vous avez ${age} ans.`; // Affiche l'âge

    console.log(`Nom: ${lastName}, Prénom: ${firstName}, âge: ${age}`); // Affiche le nom et prénom dans la console

});

