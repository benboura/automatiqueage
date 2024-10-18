document.getElementById('userForm').addEventListener('submit', function(event) {

    event.preventDefault(); // Empêche le rechargement de la page

    const birthYear = parseInt(document.getElementById('birthYear').value); // Récupère l'année de naissance

    const currentYear = new Date().getFullYear(); // Récupère l'année actuelle

    const age = currentYear - birthYear; // on Calcule l'âge

    document.getElementById('result').innerText = `Vous avez ${age} ans.`; // Affiche l'âge 

});