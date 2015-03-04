<?php require 'filefinder.php' ?>
<?php

$files = scanDir::scan("../files");

foreach($files as $value){
	echo "$value,";
}

?>