<?php
// Инициализируем сессии
session_start();
// Устанавливаем флаг в сессию
$_SESSION['access'] = true;
if ($_GET["tar"] == "1") {header('Location: text.php');}
if ($_GET["tar"] == "2") {header('Location: link1.php');}
if ($_GET["tar"] == "3") {header('Location: link2.php');}
?>