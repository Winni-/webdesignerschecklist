function scrollLink(a){"use strict";$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},300),a.preventDefault()}$(".scroll-arrow").on("click","a",scrollLink),$(".scroll-arrow").on("touchstart","a",scrollLink),$("form").garlic(),$("#cklist-reset").on("click",function(){document.location.reload(!0),localStorage.clear()});
$(function() {
	$("img").on('click',function() {
		var $mini = $(this);
		var big = "<img id='big' src="+$mini.attr("src")+">";		
		$("body").append(big);
		$big = $("#big");
		$big.css({
			"position": "fixed",
			"top": "50%",
			"left": "50%",
			"margin-left": -($big.width()/2),
			"margin-top": -($big.height()/2),
			"z-index": "1",
			"cursor": "pointer"
		});
		$big.on("click",function() {
			$(this).remove();
			$big = $("#big");
		});
		
	});
});