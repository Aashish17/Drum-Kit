
var total=document.querySelectorAll(".drum").length;
// button press
for(var i=0;i<total;i++)
{

	// use loop so that only have to write a short code.
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
	// here this contain value of document.querySelectorAll(".drum") and adding event listner
	var key=this.innerHTML;  
	soundToPlay(key); 
	buttonAnimation(key)


	// console.log(this.innerHTML); 
	// this.style.color="black";  
}	);
}

// key press
document.addEventListener("keypress",function(event){
	var key=event.key; 
	soundToPlay(key); 
	buttonAnimation(key)
	

})
// switch to assign sound
function soundToPlay(key)
{
	switch(key)
	{
		case 'w':
		case 'W':
		var audio= new Audio('sounds/tom-1.mp3')
		audio.play();
		break;
		case 'a':
		case 'A':

		var audio= new Audio('sounds/tom-2.mp3')
		audio.play();
		break;

		case 's':
		case 'S':

		var audio= new Audio('sounds/tom-3.mp3')
		audio.play();
		break;

		case 'd':
		case 'D':

		var audio= new Audio('sounds/tom-4.mp3')
		audio.play();
		break;

		case 'j':
		case 'J':

		var audio= new Audio('sounds/crash.mp3')
		audio.play();
		break;

		case 'k':
		case 'w':

		var audio= new Audio('sounds/kick-bass.mp3')
		audio.play();
		break;
		case 'l':
		case 'w':

		var audio= new Audio('sounds/snare.mp3')
		audio.play();
		break;


		default:
		alert("Sorry Wrong Key");
	}
}

function buttonAnimation(curr_key)
{
	var current=document.querySelector("."+curr_key);
	current.classList.add("pressed");

	setTimeout(function(){
		current.classList.remove("pressed");
	},200);

}