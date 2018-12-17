  
var xhr = new XMLHttpRequest();

document.getElementById("sendContact").addEventListener("click", function( e ) {
	e.preventDefault();
	document.getElementById("form-contact").style.display = "none";
	var name = document.getElementById("nameInput").value;
	var email = document.getElementById("emailInput").value;
	var message = document.getElementById("messageInput").value;

	xhr.open("POST", "email.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("name = "+ name +"&email=" + email + "&message=" + message);

	document.getElementById("haveSend").style.display = "block";
}, false);


function sectionFocus(section){
	console.log(section)
}

function dateAniv()
{
	var birthday = new Date("15 January 2000")
	var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
	document.getElementById("age").append(age)
}

dateAniv()
/*var activeSection = 0;

function getCurrentSection(){
	var hash = window.location.hash.substr(1);
	return hash;
}

function changeCurrentSecion(where){
	if (where == "up"){
		if (activeSection == "contact") return;
		switch (getCurrentSection()) {
			case "info":
			activeSection = "parcour"
			break
			case "parcour":
			activeSection = "contact"
			break
			default:
			break;
		}
		document.getElementById(activeSection).focus()
	} else {

	}
}

window.addEventListener('wheel', function(e) {
	if (e.deltaY < 0) {
		changeCurrentSecion("up")
	}
	if (e.deltaY > 0) {
		changeCurrentSecion("down")
	}
})
*/
