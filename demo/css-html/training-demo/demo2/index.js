$(function(){
	$(".header-left").on("click",function(){
		$(".left").toggleClass("left-collapsed");
		$(".dropdown_active").toggleClass("dropdown_active");
	});

	$(".ion-ios-search").on("click",function(){
		$(".search-field").toggleClass('search-field_show'); 
		var isFocus = !!$(".search-field_show");
		if(isFocus){
			$(".search-field").focus();
		} 
	});

	$(".search-field").blur(function(){
		$(".search-field").val("");
		$(".search-field").removeClass('search-field_show');
	});

	$(".dropdown").on("click",function(){ 
 

		if ($(".left-collapsed").length > 0) return;

		$(this).toggleClass("dropdown_active"); 
	});

});