var list_model = {

addtoMasterList: function(){

	userInput = document.getElementById("input_id").value;

	document.getElementById("input_id").value = "";

	document.getElementById('todoListMaster').innerHTML += "<li>" + userInput + "</li>";
}

	
}; 

window.onload = init;

function init() {

var input = document.getElementById("input_id");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("todobutton").click();
  }
});
	 
}





