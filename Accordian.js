x=document.getElementsByClassName("inner");
y=document.getElementsByClassName("butt");


function load(){
for(var i=1;i<x.length;i++)
{
x[i].style.display="none";
}

document.getElementById("Outer").classList.add("Outerinitial");
}

function show(elem){
for(var i=0;i<y.length;i++)
{
if(y[i]==elem)
{
elem.nextElementSibling.style.display="block";
}
else{
y[i].nextElementSibling.style.display="none";
}
}
}

window.onload=load;