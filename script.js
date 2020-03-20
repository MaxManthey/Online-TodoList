var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liElement = document.querySelectorAll("li");
var delBtn = document.getElementsByClassName("delete");

//ADD TO LIST
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.className = "delete button-two";
	btn.innerText = "delete";

	var li = document.createElement("li");
	li.className = "box zone";
	li.appendChild(document.createTextNode(input.value + " "));
	//add del btn to every new entry
	li.appendChild(btn);
	ul.appendChild(li);

	//Adding delete function to new Button
	btn.onclick = deleteBtnFunction;

	input.value = "";
}

button.addEventListener("click", function() {
	if(inputLength() > 0) {
		createListElement();
	}
});

input.addEventListener("keypress", function(event) {	
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
});


//LINE THROUGH LIST
ul.addEventListener("click", function(elem) {
	var target = elem.target;
	target.classList.toggle("done");
});


//Delete button
function deleteBtnFunction(event) {
	var item = event.target.parentNode;
	item.remove();
}

for(var i = 0; i < delBtn.length; i++) {
	delBtn[i].addEventListener("click", deleteBtnFunction);
}