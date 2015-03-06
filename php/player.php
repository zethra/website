<?php require 'filefinder.php' ?>
<?php

$files = scanDir::scan("../musicFiles");

//echo var_dump($files);

foreach($files as $value){
	echo "$value,";
}

?>