<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Music Player</title>	
<link href="css/main.css" type="text/css" rel="stylesheet" />
<link href="/css/player.css" type="text/css" rel="stylesheet" />

</head>
<body>
<?php include 'header.html' ?>
<div id="bar">
<div id="menuButton">Menu</div>
<p id="title"></p>
<audio id="player" src="" type="audio/mp3" controls></audio><br>
<button id="backward" onClick="backward()">Last</button>
<button id="foward" onClick="foward()">Next</button>
Play Song:<input type="text" id="song"><a id="download"><button>Download</button></a>
</div><div id="content">
<div><ol id="songList"></ol></div>
</div>

<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="js/player.js"></script>
<script type="text/javascript" src="js/dropdown.js"></script>
</body>
</html>