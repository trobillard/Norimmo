let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let togg3 = document.getElementById("togg3");
let togg4 = document.getElementById("togg4");
let togg5 = document.getElementById("togg5");
let togg6 = document.getElementById("togg6");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");
let d5 = document.getElementById("d5");
let d6 = document.getElementById("d6");
togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
})

togg2.addEventListener("click", () => {
    if(getComputedStyle(d2).display != "none"){
      d2.style.display = "none";
    } else {
      d2.style.display = "block";
    }
  })

  togg3.addEventListener("click", () => {
    if(getComputedStyle(d3).display != "none"){
      d3.style.display = "none";
    } else {
      d3.style.display = "block";
    }
  })

  togg4.addEventListener("click", () => {
    if(getComputedStyle(d4).display != "none"){
      d4.style.display = "none";
    } else {
      d4.style.display = "block";
    }
  })

  togg5.addEventListener("click", () => {
    if(getComputedStyle(d5).display != "none"){
      d5.style.display = "none";
    } else {
      d5.style.display = "block";
    }
  })

  togg6.addEventListener("click", () => {
    if(getComputedStyle(d6).display != "none"){
      d6.style.display = "none";
    } else {
      d6.style.display = "block";
    }
  })
