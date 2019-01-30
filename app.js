var tout=document.querySelector("#tout");
var body=document.querySelector("body");
var img=document.createElement("img");
	img.setAttribute("src","https://simplon.co/wp-content/themes/DiviChildV2/images/logo.png");
	body.appendChild(img);
	img.style.width="100px";
	img.style.height="100px";
	
	tout.style.display="none";
	img.style.display="block";
	img.style.marginLeft="600px";
	img.style.marginTop="300px";
var i=0;
var interval=setInterval(function (){
	i+=10;
	img.style.transform="rotate("+i+"deg)";
},10

)
if (window.onload){
	clearInterval(interval);
}
window.onload=setTimeout(function (){
	
	
	
		tout.style.display="block";
		img.style.display="none";
	

var h1=document.querySelector("h1");
var counter=0;
metier=["Devenez Developpeur.se web<br>chez Simplon","Devenez Hackeuse !<br>chez Simplon"," Devenez Dartasan<br>chez Simplon","Devenez référent.e digital<br>chez Simplon"];
setInterval(function (){
	h1.innerHTML=metier[counter];
	counter++;
	if(counter>=metier.length){
		counter=0;
	}


},1000)
},1000)
