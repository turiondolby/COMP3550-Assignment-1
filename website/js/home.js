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
xmlhttp.open("GET","js/tip1.txt",true);
xmlhttp.send();
}

var links=false;

$(document).ready(function(){
  $(document.getElementById("story")).click(function(){
    if(!links) $(document.getElementById("story_links")).show("slow",function(){});
	//else $(document.getElementById("story_links")).hide("slow",function(){});
  });
});

$(document).ready(function(){
  
    $(document.getElementById("story_links")).hide("slow",function(){
		
    });
});
