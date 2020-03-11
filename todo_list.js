
var list_model = {


displayMasterList: function(){

var chkifitemsexist = window.localStorage.getItem('itemsinlist');

	if (chkifitemsexist) {
			listItemnumber=chkifitemsexist;
 		 	document.getElementById('todoListMaster').innerHTML = window.localStorage.getItem('masterlist');

	}
	else
	{
		document.getElementById('todoListMaster').innerHTML='';
	}

},


addtoMasterList: function(){

	userInput = document.getElementById("input_id").value;
	listItemnumber+=1;

	document.getElementById("input_id").value = "";

	document.getElementById('todoListMaster').innerHTML += "<label><input type=\"checkbox\" id=\"todo_checkbox"+listItemnumber+"\" onclick=\"list_model.crossout("+listItemnumber+")\" >" + "<label id="+ listItemnumber +">"+ userInput + "</label> </label> <br>";
 
 	window.localStorage.setItem('masterlist',document.getElementById('todoListMaster').innerHTML);
 	window.localStorage.setItem('itemsinlist',listItemnumber);

 	
},
 
crossout: function(id) {

  var text = document.getElementById(id);
  var checkBox = document.getElementById("todo_checkbox"+id);

  if (checkBox.checked == true){
  		text.style = "text-decoration: line-through";
  }
  else{
  	  text.style = "text-decoration: none";
  }

},

clearList: function () {
	listItemnumber = 0;
	localStorage.clear();
	list_model.displayMasterList();


}
	
}; 


window.onload = init;

var listItemnumber=0;


function init() {

	 
list_model.displayMasterList();

var input = document.getElementById("input_id");

input.addEventListener("keyup", function(event) {
	
	  if (event.keyCode === 13) {

	   event.preventDefault();
	   document.getElementById("todobutton").click();
	  }

	});
	 
}





 