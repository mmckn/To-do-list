var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
	var li =document.querySelector("li");
	var done = document.querySelector(".done");
	

	
	
	function deletall(){
		var mushroom = document.getElementById("ptag");

mushroom.addEventListener("click", function(){
var ul = document.querySelectorAll(".bold");
console.log(ul);
for (let item of ul)
{item.remove();}	})};

		
function filter(){ //filter button for unchecked lis in list
		var hello = document.getElementById("filter");
			hello.addEventListener("click", function(){
			
				var ul = document.querySelectorAll(".done");//allows us to select all li without done class
				for (let item of ul)//for iterates through the array-like li 
					//so we can use it as an array.
				{
    item.remove();}})}
			filter();
			


	




function crossout(){
	
var uls = document.getElementsByClassName("mush");
for(var i = uls.length - 1; i >=0; i --)

	{uls[i].addEventListener("click", function (){
	this.classList.toggle("done");
	var lifinder = document.querySelector(".done");
	


})}};



del();
function del()
{
	var de = document.getElementsByClassName("de");
for(var u = de.length - 1; u >=0; u--)
{de[u].addEventListener("click", function(){

	this.parentNode.remove();	})}};

	
	





function inputLength() {
	return input.value.length;
}
var li = document.createElement("li");
function createListElement() {
	var li = document.createElement("li");
	li.className = 'bold mush';

	crossout();


	var butt = document.createElement("button");

	butt.className = 'de';
	butt.textContent = "remove";
	butt.style.Left = "50px";
	
	li.appendChild(butt);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	
	li.appendChild(butt);

	input.value = "";

	del();
	deletall();
	
	crossout();





	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


