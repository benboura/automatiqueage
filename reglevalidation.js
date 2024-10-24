                    //jeu 24/10/24

// les régles de validation de formulaire 


function verifierchamp (lastName ){
    if( champ.value ===""){
        console.log("le champ nom est vide")
    }else{
        console.log( "le champ nom est rempli")
    }
    
};
    

//ojectif: verifier que le champ "Nom" est bien compléter 

const elementFormulaire = document.querySelector("form");
console.log(elementFormulaire)

// j'ajoute un écouteur d'événement sur le formulaire pour ecouter l'evénement submit
elementFormulaire.addEventListener("submit", (event)=>{
    //récuperer l'élément qui contient l'événement de saisie "le nom"
    // "event.preventDefault()" empéche la page de se recharger. 
    event.preventDefault();
    // recuperer l'élément qui contient le nom
    const elementInputNom = document.querySelector("#lastName")
    const valuelastName = elementInputNom.value;



    console.log("##### :) Nom saisie :", valuelastName)
// verifier la valeur du champ "nom"
    if( valuelastName ===""){
        console.log("le champ nom est vide")
    }else{
        console.log( "le champ nom est rempli")
    }
    

    // oblectif: vérifier que la valeur du champ prenom n'est pas vide 

  const elementInputprenom = document.querySelector("#firstName")
  const valuefirstname = elementInputprenom.value;

  console.log("#### :) prenom saisie :", valuefirstname)
  if( valuefirstname ===""){
    console.log("le champ prenom est vide")
  } else{
    console.log("le champ prenom est rempli")
  }

})

// créer une fonction qui vérifie la valeur du champ 

