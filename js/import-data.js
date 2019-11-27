$().ready(function(){
	$.getJSON("json/donnees-produits.json", function(data) {
		$.each(data, function() {
			console.log(data);
		})
	});
});


