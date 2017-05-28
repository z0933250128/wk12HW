
$(document).ready(function(){
	$("header .menu").click(function(){
		var $ul = $(".site-nav ul");
		if($ul.hasClass("menu-Click")){
			$ul.removeClass("menu-Click");
			$ul.slideUp();
		}
		else {
			$ul.addClass("menu-Click");
			$ul.slideDown();
			return false;
		}
	});
});