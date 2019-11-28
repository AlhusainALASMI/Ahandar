let list = [];


$().ready(function(){

	//Import JSON data
	$.getJSON("json/data-products.json", function(data) {
		$.each(data["products"], function(i) {
			list.push(data["products"][i].name);
		});
		console.log(list);
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

			for (var k in list) { //For all elements in array (names)
				if (list[k].startsWith(search)) { //If query matches names beginning
					console.log(list[k]);
					$(".suggest").append("<li><a href='productPage.html?q=" + list[k] + "'>" + list[k] + "</a></li>");
				}
			}
		}
	}
};