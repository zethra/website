var target;
$(document).click(function(e) {
	var toggled = false;
	target = $(e.target);
	console.log(target);
	if (target.is('#menuButton') && !toggled) {
		e.preventDefault();
		$('#header').css('position', 'absolute');
		$('#header').css('z-index', '99');
		$('#header').toggleClass('overlay');
	} else if (target.is('#header') && toggled){
		$('#header').css('position', "relative");
		$('#header').css('z-index', '1');
		$('#header').toggleClass('overlay');
	}
});