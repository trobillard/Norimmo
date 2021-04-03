// fonction appelé quand l'utilisateur appuie sur le bouton "estimation"
function devis(){
    //Permet de clean le champ à chaque appel de la fonction.
    document.getElementById("estim").textContent="";

    //  Récup les input de saisies
    let surface = document.getElementById("surface");
    let chamber = document.getElementById("chamber");
    let materiau = document.getElementById("materiau");

    // Fais les calculs en fonction de la surface + chambre
    let materiauPrice = (surface.value *1000) + (chamber.value *10000);
    
    if(materiau.value === "parpaing"){
        // multiplie le prix surface + chambre par le matériau
        let estimation = (materiauPrice * 1.20);
         //  Crée un élément HTML pour récéptionnner le texte saisi 
        let estimationElement = document.createElement("P");
        // ajoute au html l'estimation après calcul
        estimationElement.innerText = estimation;
        //Recupère la zone de texte pour afficher le prix
        let estim = document.getElementById("estim");
        //ahoute le prix à la zone
        estim.appendChild(estimationElement);

    }
    else if (materiau.value ==="bois"){
        let estimation = (materiauPrice * 1.15)
        let estimationElement = document.createElement("P");
        estimationElement.innerText = estimation;
        let estim = document.getElementById("estim");
        estim.appendChild(estimationElement);

    }
    else {
        let estimation = (materiauPrice *1.30)
        let estimationElement = document.createElement("P");
        estimationElement.innerText = estimation;
        let estim = document.getElementById("estim");
        estim.appendChild(estimationElement);
    }
}
