<?php
header('Content-Type: application/json');
$countries = file_get_contents('data.json');
echo $countries;