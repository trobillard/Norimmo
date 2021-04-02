
//Je crée un tableau pour faire défiler les images.
let sliderJs = ["img/maison1.jpg", "img/maison2.jpg", "img/maison3.jpg"];
//Je définis slide à la première image
let slide = 0;

//ma fonction permet de changer d'image onclick, la valeur "sens" est du au fait que l'image change de sens en fonction de l'index du tableau.
function changeSlide(sens){
    //la slide à afficher = la slide en cours + ou - 1 en fonction du clique.
    slide = slide + sens;
        //si ma slide + sens est < à 0, alors ma slide = taille du tableau -1
    if (slide < 0)
        slide = sliderJs.length -1;
        //si ma slide + sens est > à la taille du tableau, alors je retourne à la slide 1 (index 0 du tableau)
    if (slide > sliderJs.length -1)
        slide = 0;
        //j'affiche l'élement qui a l'ID slide, et je lui donne la valeur de l'index du tableau de slide.
    document.getElementById("slide").src = sliderJs[slide]
 
}

// toutes les 6 secondes, je rejoute 1 au tableau et permet donc d'avancer dans celui-ci, arrivé à la fin du tableau je retourne à la slide index 0 comme indiqué dans la fonction.
setInterval("changeSlide(1)", 6000);
