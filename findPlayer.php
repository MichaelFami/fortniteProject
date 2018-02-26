<?php
if (!empty($_GET['playerName'])) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.fortnitetracker.com/v1/profile/psn/" . $_GET['playerName']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'TRN-Api-Key: 47112942-ea0a-42d5-ba4e-17d64259a4e1'
    ));
    $response = curl_exec($ch);
    curl_close($ch);
    echo $response;
}



?>
