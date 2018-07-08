var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.createElement("button");			//a button which generated random color for backgrounds.
btn.appendChild(document.createTextNode("Surprise"));
body.appendChild(btn);
//just to check that we are getting the requested values via javascript
// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);
//just by using the line below the comment the inputs have the same color as background.
body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value
	+")";


function setGradient(){
	// console.log(color1.value);     basic checking
	//console.log(color2.value);
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value
	+")";

	css.textContent = body.style.background + ";"; 
}

function getColor(){
	var clr1 = getRandColor();
	var clr2 = getRandColor();
	body.style.background = 
	"linear-gradient(to right, " 
	+ clr1 
	+ "," 
	+ clr2
	+")";
}

function getRandColor()
{
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

color1.addEventListener("input" , setGradient);

color2.addEventListener("input" , setGradient);

btn.addEventListener("click", getColor);