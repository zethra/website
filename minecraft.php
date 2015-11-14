<?php
use xPaw\MinecraftQuery;
use xPaw\MinecraftQueryException;

define('MQ_SERVER_ADDR', '192.168.0.2');
define('MQ_SERVER_PORT', 25565);
define('MQ_TIMEOUT', 1);

Error_Reporting(E_ALL | E_STRICT);
Ini_Set('display_errors', true);

require __DIR__ . '/php/MinecraftQuery.php';
require __DIR__ . '/php/MinecraftQueryException.php';

$Timer = MicroTime(true);

$Query = new MinecraftQuery();

try {
    $Query->Connect(MQ_SERVER_ADDR, MQ_SERVER_PORT, MQ_TIMEOUT);
} catch (MinecraftQueryException $e) {
    $Exception = $e;
}

$Timer = Number_Format(MicroTime(true) - $Timer, 4, '.', '');
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <link type="text/css" rel="stylesheet" href="/css/main.css">
    <title>Zethra Tech</title>
</head>

<body>
<?php include 'header.html' ?>
<div id="content">
    <div style="text-align: center;">
        <h2>Zethra's FTB Unleased Server IP is:</h2>

        <h2>162.243.4.46:25565</h2>

        <?php
        $Info = $Query->GetInfo();
        if (isset($Exception)) {
            //echo htmlspecialchars($Exception->getMessage());
            //echo nl2br($e->getTraceAsString(), false);
            echo '<h2><span style="color: #C51013; ">The Server is offline!</span></h2>';
        } else {
            echo '<h2><span style="color: #3ADF00; ">The Server is currently Online <br>
                    Currently there are ' . $Info["Players"] . ' players online
                    of a maximum of ' . $Info["MaxPlayers"] . '.</span></h2>';
        }
        $Players = $Query->GetPlayers();
        echo '<h2><span style="color: #3ADF00; ">Players: <br/>';
        foreach ($Players as $Player) {
            echo htmlspecialchars( $Player ) . '<br/>';
        }
        echo '</span></h2>';

        ?>


        <p><b>I do not run my server on a regular basis any more accept when requested</b></p>

        <p><b>To get the FTB Unleashed mod pack, download the FTB launcher <a
                    href="http://http://www.feed-the-beast.com/" target="_blank">here</a>, from the FTB web site. Log
                in, Select the
                Unleashed pack form the menu and click launcher.<br>
                For a video tutorial go <a href="http://www.youtube.com/watch?v=Fts3swd147I"
                                           target="_blank">here</a></b>

        <p>
            <img src="pack logo.png">
    </div>
</div>

</body>
</html>
