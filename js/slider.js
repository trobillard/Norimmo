let sliderJs = ["img/maison1.jpg", "img/maison2.jpg", "img/maison3.jpg"];
let slide = 0;

function changeSlide(sens){
    slide = slide + sens;
    if (slide < 0)
        slide = sliderJs.length -1;
    if (slide > sliderJs.length -1)
        slide = 0;
    document.getElementById("slide").src = sliderJs[slide]
 
}
setInterval("changeSlide(1)", 6000);
