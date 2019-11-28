let listNames = [];


$().ready(function(){

	//Import JSON data
	$.getJSON("json/data-products.json", function(data) {
		$.each(data["products"], function(i) {
			listNames.push(data["products"][i].name);
		});
		console.log(listNames);
		console.log("data loaded from json/data-products.json");
	});
});


$(document).on("keyup", checkMatch);

function checkMatch() {
	if ($(".search").is(":focus")) {
		var search = $(".search").val().toLowerCase(); //get query lowercase

		if (search == "") { //If query is empty v
			$(".suggest").empty(); //Clear suggestions
		}

		else {
			$(".suggest").empty(); //Clear after each keystroke(clean)

			for (var k in listNames) { //For all elements in array (names)
				if (listNames[k].startsWith(search)) { //If query matches names beginning
					console.log(listNames[k]);
					$(".suggest").append("<li><a href='productPage.html?q=" + listNames[k] + "'>" + listNames[k] + "</a></li>");
				}
			}
		}
	}
};