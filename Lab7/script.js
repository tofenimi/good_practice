// cache the DOM
var button = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("poza")
var asteptari = document.getElementById("sec1")
var an = document.getElementById("anul")

const d=new Date()
var year=d.getFullYear()

//Adaugam eventlistener 

button.addEventListener("click",altaViata)
an.addEventListener("mouseover",displayAge)

function altaViata()
{
    nume.innerHTML ="Functie : Java Dev"	
	prenume.innerHTML="Egipt"
	asteptari.innerHTML="Experiente:<ol><li>Intership</li></ol>"
	img.src = "img2.jpg"
	
	body.style.backgroundColor = "orange" 
	body.style.color="blue"
	
	img.style.opacity ="0.7"

	
}

function displayAge()
{
an.innerHTML=year-an.innerHTML;	

}