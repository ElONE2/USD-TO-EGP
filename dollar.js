var myinput= document.getElementById("input");
var pound= document.getElementById("pound")
var mybtn= document.getElementById("btn")
var tousd= document.getElementById("USD")
mybtn.onclick = function(){
    
console.log(    pound.value= myinput.value*23.14)
}
window.onload=function(){
    myinput.value=0
    pound.value=0
}
tousd.onclick = function(){
    
console.log(myinput.value= pound.value/23.14)
    }