let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let mountain2 = document.getElementById("mountain-2");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let header = document.querySelector(".header");

window.onscroll = function(){

    let value = scrollY;
    stars.style.left = value + "px"
    moon.style.top = value*4 + "px"
    mountain.style.top = value*2 + "px"
    mountain2.style.top = value*1.5 + "px"
    river.style.top = value + "px"
    boat.style.top = value + "px"
    boat.style.left = value*3 + "px"
    header.style.fontSize = value + "px"
    if(scrollY >= 53.599998474121094){
        header.style.fontSize = 53.599998474121094 + "px"
        header.style.fontSize = 53.599998474121094 + "px"
        header.style.position = "fixed"
        if(scrollY >= 495.20001220703125){
            header.style.display = "none"
        }else{
            header.style.display = "block"
        }
        if(scrollY >= 104){
            document.querySelector(".main").style.background ="linear-gradient(#376281,#10001f)"
        }else{
            document.querySelector(".main").style.background ="linear-gradient(#200016, #10001f)"
        }
    }

}