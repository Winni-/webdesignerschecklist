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
			"z-index": "1",
			"cursor": "pointer",
			"max-height": $(window).height(),
			"max-width": $(window).width()			
		});
		$big.css({
			"margin-left": -( Math.min($("#big").width(),$(window).width()) /2),
			"margin-top": -( Math.min($("#big").height(),$(window).height()) /2)
		})
		$big.on("click",function() {
			$(this).remove();
			$big = $("#big");
		});
		
	});
});