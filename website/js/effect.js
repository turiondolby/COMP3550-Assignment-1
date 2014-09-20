function loadXMLDoc()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("tip").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","tip1.txt",true);
xmlhttp.send();
}





var side1=true;
var side2=true;
$(document).ready(function(){
  $(document.getElementById("side_1")).click(function(){
    if(side1) $(document.getElementById("side_1_content")).hide("slow",function(){});
	else $(document.getElementById("side_1_content")).show("slow",function(){});
	side1=!side1;
  });
});

$(document).ready(function(){
  $(document.getElementById("side_2")).click(function(){
    if(side1) $(document.getElementById("side_2_content")).hide("slow",function(){});
	else $(document.getElementById("side_2_content")).show("slow",function(){});
	side1=!side1;
  });
});
