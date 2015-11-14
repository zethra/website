var started = false;
var x = 0;
var y = 0;
var leftBound = 30;
var rightBound;
var topBound = 0.5;
var bottomBound;
var ball = $('#ball');
var leftup = false;
var leftdown = false;
var rightup = false;
var rightdown = false;
var lPaddlePos;
var rPaddlePos;
var bally;
var velocty;
var gg = false;
var speed = 4;

function main(){
	if(!gg){
		getPos();
		move();
		if(leftup && lPaddlePos >= topBound){leftmove(-1);}
		else if(leftdown && lPaddlePos <= bottomBound - 170){leftmove(1);}
		if(rightup && rPaddlePos >= topBound){rightmove(-1);}
		else if(rightdown && rPaddlePos <= bottomBound - 170){rightmove(1);}
	}
}

$(document).keydown(function(e){
	console.log(e.which);
	switch (e.which){
		case 81: leftup = true; console.log('leftup'); break;
		case 65: leftdown = true; console.log('leftdown'); break;
		case 80: rightup = true; console.log('rightup'); break;
		case 76: rightdown = true; console.log('rightdown'); break;
		case 13: start(); break;
        case 46: window.close();
		case 82: restart();
	}
});
$(document).keyup(function(e){
	switch (e.which){
		case 81: leftup = false; console.log('leftup'); break;
		case 65: leftdown = false; console.log('leftdown'); break;
		case 80: rightup = false; console.log('rightup'); break;
		case 76: rightdown = false; console.log('rightdown'); break;
	}
});
function check(){
	if(leftPos < leftBound && bally + 30 < lPaddlePos || bally > lPaddlePos + 200){
		console.log('leftOut');
		gg = true;
		end2();
		return false;
	}
	if(leftPos > rightBound && bally + 30 < rPaddlePos || bally > rPaddlePos + 200){
		console.log('rightOut');
		gg = true;
		end1();
		return false;
	}else{return true;}
}
function move(){
	if(leftPos > leftBound && leftPos < rightBound && topPos > topBound && topPos < bottomBound){
		$('#ball').css('left', '+=' + x);
		$('#ball').css('top', '+=' + y);
	}else{
		if(leftPos <= leftBound || leftPos >= rightBound){
			check();
			if(check()){
				if(leftPos < leftBound){
					if(lPaddlePos <= bally <= lPaddlePos + 40){
						x = 3; y = 5;
					}else if(lPaddlePos + 41 <= bally <= lPaddlePos + 80){
						x = 3; y = 4;
					}else if(lPaddlePos + 81 <= bally <= lPaddlePos + 120){
						x = 3; y = 3;
					}else if(lPaddlePos + 121 <= bally <= lPaddlePos + 160){
						x = 3; y = -4;
					}else if(lPaddlePos + 161 <= bally <= lPaddlePos + 200){
						x = 3; y = -5;
					}
				}
			}
			x *= -1;
			$('#ball').css('left', '+=' + x);
			$('#ball').css('top', '+=' + y);
		}else if(topPos <= topBound || topPos >= bottomBound){
			y *= -1;
			$('#ball').css('left', '+=' + x);
			$('#ball').css('top', '+=' + y);
		}
	}
}
function getPos(){
	leftPos = parseInt($('#ball').css('left'));
	topPos = parseInt($('#ball').css('top'));
	lPaddlePos = parseInt($('#leftP').css('top'));
	rPaddlePos = parseInt($('#rightP').css('top'));
	bally = parseInt($('#ball').css('top'));
}
function leftmove(dir){
	$('#leftP').css('top', '+=' + dir);
}
function rightmove(dir){
	$('#rightP').css('top', '+=' + dir);
}
function start(){
	if(!started){
		$('#title').hide();
		$('#titleback').hide();
		setInterval(main, 1);
		started = true;
		//fullscreen()
		rightBound = $(document).width() - 60;
		bottomBound = $(document).height() - 30;
		var middleh = $(document).height() / 2;
		var middlew = $(document).width() / 2;
		$('#leftP').css('top', middleh - 100);
		$('#rightP').css('top', middleh - 100);
		$('#ball').css('top', middleh - 15);
		$('#ball').css('left', middlew - 15);
		var startTurn = Math.floor((Math.random() * 4) + 1);
		switch(startTurn){
			case 1: x = speed; y= speed; break;
			case 2: x = speed; y= -speed; break;
			case 3: x = -speed; y= speed; break;
			case 4: x = -speed; y= -speed; break;
		}
	}
}
function end1(){
	$('#titleback').show();
	$('#title').hide();
	$('#p1').show();
	window.setTimeout(restart,1000);
}
function end2(){
	$('#titleback').show();
	$('#title').hide();
	$('#p2').show();
	window.setTimeout(restart,1000);
}
function restart(){
	location.reload(false);
}
function fullscreen(){
	var docElement, request;

    docElement = document.documentElement;
    request = docElement.requestFullScreen || docElement.webkitRequestFullScreen || docElement.mozRequestFullScreen || docElement.msRequestFullScreen;

    if(typeof request!=="undefined" && request){
        request.call(docElement);
    }
}
$(document).ready(function(e) {	
	$('#p1').hide();
	$('#p2').hide();
});