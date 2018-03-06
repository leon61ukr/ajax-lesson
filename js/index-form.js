$('.client-balance input[type="submit"]').click( e => {
	e.preventDefault();
	
$.ajax({
	url: "https://tranquil-sierra-86540.herokuapp.com/&#108;&#101;&#111;&#110;&#54;&#49;&#64;&#117;&#107;&#114;&#46;&#110;&#101;&#116;", 
	method: "POST",
	data: {
'client-name': $('#form-client-name').val(),
'account-balance': $('#form-account-balance').val()
	},
	dataType: "json"
});    

});