
function devis(){

    let surface = document.getElementById("surface");
    let chamber = document.getElementById("chamber");
    let materiau = document.getElementById("materiau");
    let surfacePrice = surface.value * 1000;
    let chamberPrice = chamber.value * 10000;
    let materiauPrice = surfacePrice + chamberPrice;
    
    if(materiau.value === "parpaing"){
        let estimation = (materiauPrice * 1.20);
        let estimationElement = document.createElement("P");
        estimationElement.innerText = estimation;
        let estim = document.getElementById("estim");
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
