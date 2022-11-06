var x=window.matchMedia("(max-width:600px)")
var sec1=document.getElementById("section-3")
var sec2=document.getElementById("section-4")
var sec3=document.getElementById("section-5")
var sec4=document.getElementById("section-6")
var sec5=document.getElementById("section-8")
var sec6=document.getElementById("section-9")
var sec7=document.getElementById("section-9-cards")
var sec8=document.getElementById("footer1-content")
var sec4_1=sec4.querySelectorAll('.card');

responsive(x);

function responsive(x){
    if(x.matches){
        sec1.classList.remove("d-flex");
        sec2.classList.remove("d-flex");
        sec3.classList.remove("d-flex");
        sec4.classList.remove("d-flex");  
        sec5.classList.remove("d-flex");       
        sec6.classList.remove("d-flex");       
        sec7.classList.remove("d-flex");       
        sec8.classList.remove("d-flex"); 
        sec4_1.classList.remove("m-5");      

        // sec1.style.backgroundColor="yellow";
    }
    else{
        sec1.classList.add("d-flex");
        sec2.classList.add("d-flex");
        sec3.classList.add("d-flex");
        sec4.classList.add("d-flex");
        sec5.classList.add("d-flex");
        sec6.classList.add("d-flex");
        sec7.classList.add("d-flex");       
        sec8.classList.add("d-flex");
        sec4_1.classList.add("m-5");
       
    }
}