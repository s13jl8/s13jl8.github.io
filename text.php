<?php
// Инициализируем сессии
session_start();
// Генерация ошибки 404 при доступе вне системы
if(!$_SESSION['access'])
{
 header("HTTP/1.1 404 Not Found");
 exit("404 Not Found");
}
?>
<head>
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/md5.js"></script> <!--подключаем получение хэша MD5-->
<script src="js.js"></script> <!--подключаем свой скрипт-->
</head>
<body>
<h2>This text which you cannot copy!</h2>
<p>You can click as much as you want, but can't do any ;)</p>
<!--ссылки-->
<a onclick="return location.href = 'yeap.php?tar=2'">Тык 1</a> 
<a onclick="return location.href = 'yeap.php?tar=3'">Тык 2</a>
<br><br>
<button onclick=unlock()>If you know password!</button> <!--кнопка с вызовом unlock() в js.js-->
</body>
<footer>
</footer>
<?php
// Очищаем переменные сессии
unset($_SESSION['access']);
?>
