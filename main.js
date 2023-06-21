        // call the characchter i will use 

let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");
let grayScale = document.getElementById("gray-scale");

let download=document.getElementById("download");
let reset =document.querySelector("span");
let BoxImage =document.querySelector(".image");
let img = document.getElementById("img")

let upload = document.getElementById("upload")

const canvas=document.getElementById("canvas");// program photos
const ctx=canvas.getContext("2d"); 

// fourth function make the new pic and filters reset from begining 

function resetValue (){
    img.style.filter =""; 
    saturate.value= "100";
    contrast.value="100";
    brightness.value="100";
    sepia.value="0";
    blur.value="0";
    hueRotate.value="0";
    grayScale.value= "0";
}

// first function hide the reset,download and box image :

window.onload = function (){
    download.style.display="none";
    reset.style.display="none";
    BoxImage.style.display="none";
}

// second function when i click upload :

upload.onchange= function() {
    resetValue ();
    download.style.display="block";
    reset.style.display="block";
    BoxImage.style.display="block";

    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function (){
        img.src= file.result; 
    }
        img.onload=function (){
            canvas.width=img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0,canvas.width,canvas.height);
            img.style.display="none";
        }
}

// catch all filters in one variable so that every change in one dont affect the other one 
let filters = document.querySelectorAll("input");

// third function when use it each filter work  
filters.forEach(filter => {
    filter.addEventListener( "input", function (){
        ctx.filter = `
                            saturate(${saturate.value}%)
                            contrast(${contrast.value}%)
                            brightness(${brightness.value}%)
                            sepia(${sepia.value}%)
                            grayscale(${grayScale.value})
                            blur(${blur.value}px)
                            hue-rotate(${hueRotate.value}deg)
                            `
                            ctx.drawImage(img,0,0,canvas.width,canvas.height);
})

})


    // fifth function when click on download button down load the photo 

download.onclick=function (){
    download.href= canvas.toDataURL("image/jpeg");
}
