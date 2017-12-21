$(document).ready(function() {
	let navbtn = document.getElementById("navbtn");
	navbtn.innerHTML = "&#9776;";

	let isOpen = false;

	let menu = document.getElementById("menu");
	let btncontainer = document.getElementById("btncontainer");

	$("#container2").toggleClass("nodisplay");

	navbtn.addEventListener("click", function() {
		if(isOpen) {
			isOpen = false;
			navbtn.innerHTML = "&#9776;";
		} else {
			isOpen = true;
			navbtn.innerHTML = "&times;";
		}
		$("#btncontainer").toggleClass("left200");
		$("#menu").toggleClass("left0");
		$("#container1, #container2").toggleClass("left40");
		$("#container1, #container2").toggleClass("left240");
	})

	let container = "container1";
	$("#btn1").click(function() {
		if(container != "container1") {
			$("#container1, #container2").toggleClass("nodisplay");
			container="container1";
		}
	});

	$("#btn2").click(function() {
		if(container != "container2") {
			$("#container1, #container2").toggleClass("nodisplay");
			container="container2";
		}
	});
})