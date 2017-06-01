// Projects tab logic

$(document).ready(function(){
	console.log("DOM has loaded");
});

function LIT(){
	$('#LIT_tab').addClass("active");
	//remove other active
	$('#vlogMe_tab').removeClass("active");
	$('#StrollingAround_tab').removeClass("active");

	$("#project_image").attr("src", "LIT1.jpg");
	$('#project_title').html("<b>Living In Technology (LIT)</b>");
	$('#project_date').html("August 2016-May 2017");
	$('#project_summary').html(
		"An affordable Smart Home System, developed for CSUN\'s Senior Design Showcase, using inexpensive Hardware, open-source and custom-made Software, to control home appliances remotely through the System\'s Website or Android Application");
	$('#project_role').html(
		"<b>Role: </b>Software Engineer/ Applications Developer / Android Developer");
}

function vlogMe(){
	$('#vlogMe_tab').addClass("active");
	//remove other active
	$('#LIT_tab').removeClass("active");
	$('#StrollingAround_tab').removeClass("active");

	$("#project_image").attr("src", "vlogMe.jpg");
	$('#project_title').html("<b>vlogMe</b>");
	$('#project_date').html("August 2016-December 2016");
	$('#project_summary').html(
		"A proposed Video Blog forum, featuring video comments at relevant points on the Main topic video");
	$('#project_role').html("<b>Role: </b>Web Developer/ UI/UX designer");

}

function StrollingAround(){
	$('#StrollingAround_tab').addClass("active");
	//remove other active
	$('#vlogMe_tab').removeClass("active");
	$('#LIT_tab').removeClass("active");

	$("#project_image").attr("src", "StrollingAround.png");
	$('#project_title').html("<b>Strolling Around</b>");
	$('#project_date').html("February 2016-May 2016");
	$('#project_summary').html(
		"An Accessible Navigation application for Android Devices");
	$('#project_role').html("<b>Role: </b>Android Developer/ Graphic Designer");
}