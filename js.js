<!--
//������ �������� ������ ���� ��� ���� ��������
function newWindow(x){
Win = window.open(x,"Win",
"height=480,width=640,copyhistory=no,directories=no,menubar=no,status=no,tollbar=no,left=0,top=0");
}

<!--//
var getc=getCookie("pswdhash"); //�������� �������� ���� � ������������ �������

<!--������� ��������� �������� ���� �� ���� � ���. regexp-->
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined; //������� undefined, ���� ��� ��������
}

function unlock() {
  if (getCookie("pswdhash") != "5f4dcc3b5aa765d61d8327deb882cf99") {
  p = prompt('Password, please'); //������ ������ ������
  var hash = CryptoJS.MD5(p); //�������� ������
  document.cookie="pswdhash="+hash; //��������� ��� � ����
  }
  if (getCookie("pswdhash") == "5f4dcc3b5aa765d61d8327deb882cf99") {
  document.onselectstart=function(){return true}
  document.oncontextmenu=function(){return true}
  document.onmousedown=function(){return true}
  document.oncopy=function(){return true}
  document.onkeydown=function(){return true;}
  }

}

<!--���������� ��� ������������� ������ �� ���������-->
//��� �������� ����������� �����������
if (CryptoJS.MD5(getCookie("pswdhash")) != "5f4dcc3b5aa765d61d8327deb882cf99") { 
  document.onselectstart=function(){return false}
  document.oncontextmenu=function(){return false}
  document.onmousedown=function(){return false}
  document.oncopy=function(){return false}
  document.onkeydown=function(e){if (e.keyCode == 115 || e.keyCode == 83 || e.keyCode == 117 || e.keyCode == 85) return false;}
}
//-->
//-->