// function $_GET(q,s) {
//       s = s ? s : window.location.search;
//       var re = new RegExp('&'+q+'(?:=([^&]*))?(?=&|$)','i');
//       return (s=s.replace(/^?/,'&').match(re)) ? (typeof s[1] == 'undefined' ? '' : decodeURIComponent(s[1])) : undefined;
// }
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
// if(getUrlVars()["test"]!=1 && document.domain=="sachagreif.com"){
// $("body").addClass("hidden");
// }
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(function(){
	var refDomain=document.referrer.split('/')[2];
	if(refDomain=="news.ycombinator.org" || refDomain=="news.ycombinator.com"){
		$(".hn-message").removeClass("hidden");
	}
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: ""
	});
	
	window.r_index=1;
	$(".refresh").click(function(){
		$(".insults li").removeClass("hidden").hide();
		var r=getRandomInt(1,7);
		if(r===window.r_index){
			//roll the dice a second time
			r=getRandomInt(1,7);
		}
		window.r_index=r;
		$(".insults li:nth-child("+r+")").fadeIn("medium");
		return false;
	});
	
	$(".buy").click(function(){
		$(".overlay").removeClass("hidden");
		$(this).next(".options").removeClass("hidden");
		if($(this).hasClass("regular")){
			_kmq.push(['record', 'Clicked Buy', {'Version':'Regular', 'Amount':5.99}]);
		}else{
			_kmq.push(['record', 'Clicked Buy', {'Version':'Deluxe', 'Amount':11.99}]);
		}
		return false;
	});
	
	$(".overlay").click(function(){
		$(".options").addClass("hidden");
		$(this).addClass("hidden");
	});




});