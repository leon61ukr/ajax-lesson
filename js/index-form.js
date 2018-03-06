$('.client-balance input[type="submit"]').click( e => {
	e.preventDefault();
	
$.ajax({
	url: "https://tranquil-sierra-86540.herokuapp.com/leon61@ukr.net", 
	method: "POST",
	data: {
'client-name': $('#form-client-name').val(),
'account-balance': $('#form-account-balance').val()
	},
	dataType: "json"
});    

});