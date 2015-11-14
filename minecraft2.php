<?php
require 'php/MinecraftQuery.php';
require 'php/MinecraftQueryException.php';

use xPaw\MinecraftQuery;
use xPaw\MinecraftQueryException;

$Query = new MinecraftQuery();

try {
    $Query->Connect('162.243.4.46', 25565);

    print_r($Query->GetInfo());
    print_r($Query->GetPlayers());
} catch (MinecraftQueryException $e) {
    echo $e->getMessage();
}