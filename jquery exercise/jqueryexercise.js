if(jQuery){
	alert("jquery exists")
}else{
	alert("jquery not found");
}
//Change all the divs background to purple
$("div").css("background","purple");

//Change divs with the class highlight to have a width of 200 px
$(".highlight").css("width","200px");

//Change div with the id third to have an orange border
$("#third").css("border","1px solid orange");

//Change the text color of the first div to pink
$("div:first-of-type").css("color","pink");
