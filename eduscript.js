$(document).ready(function(){
	$('#hbrg').click(function(){
		$(this).toggleClass('fa-times');
		$('.navbar').toggleClass('nav-toggle');
	});
	$('#login').click(function(){
		$('.login-form').addClass('popup');
	});
	$('.login-form form .fa-times').click(function(){
		$('.login-form').removeClass('popup');
	});
var email = document.getElementById("email").value;
function validateEmail(champsText){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(champsText.value.match(mailformat)){
document.form.email.focus();
document.getElementById("email").style.backgroundColor="white";
return true;
}else{
alert("Veuillez insérer une adresse mail valide");
document.getElementById("email").style.backgroundColor="red";
document.form.email.focus();
return false;
}
}
var nom = document.getElementById("nom").value;
function nomValidate() {
var letters = /^[A-Za-z]+$/;
var nom = document.getElementById("nom");
if(nom.value.match(letters)) {
document.getElementById("nom").style.backgroundColor="white";
return true;
} else {
alert('Le nom ne doit contenir que des lettres');
document.getElementById("nom").style.backgroundColor="red";
document.getElementById("nom").focus();
return false;
}
}
function numberValidate() {
var n = document.getElementById("n");
var m = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im ;
if(n.value.match(m)) {
document.form.n.focus();
document.getElementById("n").style.backgroundColor="white";
return true;
}else{
document.getElementById("n").style.backgroundColor="red";
document.form.n.focus();
return false;
}
}
function validateForm(){
if (!requiredElement()){
return false;
}
else{
confirm("Toutes les données sont validées ! Voulez-vous les envoyer au serveur?");
}
}
});
