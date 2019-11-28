//get URL parameters
const urlParam = new URLSearchParams(window.location.search);
const productParam = urlParam.get("q");

let listAll = [];
let listNames = [];


//------------------------------------------------
$(document).on("keyup", checkMatch); //suggestions

$(document).ready(function() {
	//fade out voile erreur
	$(".invalidParamVoile").animate({opacity: 1}, 200);

	$.getJSON("json/data-products.json", function(data) {
		//push all data
		$.each(data, function(key, value) {
			listAll.push(key, value);
		});
		//push only names
		$.each(data["products"], function(h) {
			listNames.push(data["products"][h].name);
		});

	enableInfos();
	});
});
//-----------------------------------------------



function enableInfos() {
		var i = 0;
		var j = 0; //pour le feedback
		
		//if product = url param > toggle everthing
		for (var i = 0; i <= listAll[1].length-1; i++) {
			if (productParam == listAll[1][i].name) {

				//easy naming //p = products
				var pName = listAll[1][i].name;
				var pImage = listAll[1][i].spec[0].image;
				var pPrice = listAll[1][i].spec[0].price;
				var pDescription = listAll[1][i].spec[0].description;

				//toggle everything
				$(".invalidParamVoile").hide();
				$("#title").append(pName);
				$(".image").attr("src", pImage);
				$(".price").append(pPrice);
				$(".description").append(pDescription);

				for (var j = 0; j <= listAll[1][i].spec[0].evaluation.length-1; j++) {
					
					//easy naming //f = feedback
					var fUser = listAll[1][i].spec[0].evaluation[j].user;
					var fComment = listAll[1][i].spec[0].evaluation[j].comment;
					var fNote = listAll[1][i].spec[0].evaluation[j].note;


					$(".feedback").append(
						"<p class='user'>"+ fUser +"</p>"+
						"<p class='comment'>"+ fComment + "</p>"+
						"<p class='note'>"+ fNote +"</p>");
				}
			}
		}
};



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