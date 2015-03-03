<?php require 'filefinder.php' ?>
<?php

$files = scanDir::scan("../music");

//echo var_dump($files);

foreach($files as $value){
	echo "$value,";
}

?>