<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Music Player</title>	
<script src="player/jquery.js"></script>	
<script src="player//mediaelement-and-player.min.js"></script>
<link rel="stylesheet" href="player/mediaelementplayer.min.css" />
</head>

<body>
<h1>Audio Player</h1>

<p id="title"></p>


<audio id="player" src="http://zethratech.com/files/New_Game.mp3" type="audio/mp3" controls>		
z</audio>	
<button id="foward" onClick="foward()">Next</button>
<button id="backward" onClick="backward()">Last</button>
Play Song:<input type="text" id="song">
<div><ol id="songList"></ol></div>


<script>
//$('audio,video').mediaelementplayer();
var files;
var tracks;
var track = 0;
var audio = $("#player");
var name;
var songTextBox = document.getElementById('song');
var titleTextBox = document.getElementById('title');
$.ajax({
  url: "filefinder.php",
}).done(function( data ) {
    if ( console && console.log ) {
      console.log(data);
    }
	files = data.split(',');
	files.pop();
	tracks = files.length;
	files = shuffle(files)
	for (f=0; f < tracks; f++){console.log(files[f]);}
	audio.attr("src", files[track]);
	titleTextBox.innerHTML = files[track].replace(/^.*[\\\/]/, '')
	creatList();
	audio[0].pause();
    audio[0].load();
	
});

$('#song').keypress(function(){
	if (event.keyCode == 13) {
		var songnum = parseInt(document.getElementById('song').value) - 1
		if(songnum >= 0 && songnum <= tracks - 1){
			audio.attr("src", files[songnum]);
			titleTextBox.innerHTML = files[songnum].replace(/^.*[\\\/]/, '')
			audio[0].pause();
			audio[0].load();
			audio[0].play();
		}
		document.getElementById('song').value = ""
    }
});

function foward(){
	track++;
	if(track >= tracks){track = 0;}
	audio.attr("src", files[track]);
	titleTextBox.innerHTML = files[track].replace(/^.*[\\\/]/, '')
	audio[0].pause();
    audio[0].load();
    audio[0].play();
}
function backward(){
	track--;
	if(track < 0){track = tracks - 1;}
	audio.attr("src", files[track]);
	titleTextBox.innerHTML = files[track].replace(/^.*[\\\/]/, '')
	audio[0].pause();
    audio[0].load();
    audio[0].play();
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function list(){
	$('#songList').append("<ul></ul>");
	for(n in files){
		var li = "<li>"
		$('ul').append(li.concat(files[n]));
	}
}

function creatList(){
	var list = document.getElementById("songList");
	for(n = 0; n < tracks; n++){
		var listItem = document.createElement('li');
		listItem.innerHTML = files[n].replace(/^.*[\\\/]/, '');
		list.appendChild(listItem);
	}
}
</script>
</body>
</html>