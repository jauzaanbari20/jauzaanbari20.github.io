<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "taskmanager";

$konek = mysqli_connect($host, $user, $pass, $db) or die("Database MYSQL Tidak Terhubung");