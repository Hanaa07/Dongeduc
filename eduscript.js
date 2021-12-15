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
});