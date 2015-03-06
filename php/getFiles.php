<?php require 'filefinder.php' ?>
<?php

$files = scanDir::scan("../uploads");

foreach($files as $value){
	echo "$value,";
}

?>