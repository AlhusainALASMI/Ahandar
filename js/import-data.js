$().ready(function(){
	$.getJSON("json/donnees-produits.json", getNames());
});


function getNames () {
	$.getJSON("json/donnees-produits.json", function(data) {
		obj = JSON.parse(data);
		console.log(data.products.antivirus);
		console.log("ha");
		//for (var i in data.products) {
		//	console.log(data.products[i]);
		//}
	});
}