var elements = ["start","input","output","process","if"],
	$bar = $("#contenido .slt ul"),
	$ele;

for (var i = 0; i < elements.length; i++) {
	
	elements[i];
	$bar.append("<li></li>");
	$("#contenido .slt ul li").eq(i).append(elements[i]).addClass("lel");
	
};

$ele = $("#contenido .slt ul li");



function newblock (types){

	this.type = types;
	switch (types){

		case "start":
			if( $(".canvas .start").length != 0 ){

				$(".workspace p").append("There is already a Start object.<br>");

			} else {
				$(".canvas .box").append($("<p></p>").text(types).addClass(types));
				$(".workspace p").append("Object added.<br>");
			}
			break;

		case "input":
			$(".canvas .box").append($("<p></p>").text(types).addClass(types));
			$(".workspace p").append("Object added.<br>");
			break;
	}
}



$ele.eq(0).click(function(){ newblock("start");});
$ele.eq(1).click(function(){ newblock("input");});

