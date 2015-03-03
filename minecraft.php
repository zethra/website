<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link type="text/css" rel="stylesheet"  href="/css/main.css">
<title>Zethra Tech</title>
</head>

<body>
<?php include 'header.html' ?>
<div id="content">
<center>
<h2>Zethra's FTB Unleased Server IP is:</h2>
<h2>162.243.4.46:25565</h2>
<?php

	include_once 'status.class.php';
	$status = new MinecraftServerStatus();
	$response = $status->getStatus('162.243.4.46', '1.5.2', 25565);
	if(!$response) {
		echo"<h2><font color='#C51013'>The Server is offline!</font></h2>";
	} else {
		echo"<h2><font color='#3ADF00'>The Server is currently Online <br> 
		IP is ".$response['hostname'].":25565<br>
		Currently there are ".$response['players']." players online
		of a maximum of ".$response['maxplayers'].".</font></h2>";
	}

?>


<p><b>I do not run my server on a regular basis any more accept when requested</b></p>
<p><b>To get the FTB Unleashed mod pack, download the FTB launcher <a href="http://http://www.feed-the-beast.com/" target="_blank">here</a>, from the FTB web site.  Log in, Select the 
Unleashed pack form the menu and click launcher.<br>
For a video tutorial go <a href="http://www.youtube.com/watch?v=Fts3swd147I" target="_blank">here</a></b><p>
<img src="pack logo.png">
</center>
</div>

</body>
</html>
