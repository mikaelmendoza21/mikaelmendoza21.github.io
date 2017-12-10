/* Mikael Mendoza*/

$(document).ready(function(){
	console.log('I am the DOM. I have loaded.');

	//Tab switching
	$('.tab-title').click(function(){

		$('.tab-title').removeClass('selected');
		$(this).addClass('selected');
		var tabIndex = $(this).data('index');

		//Check what tab is visible
		var activeTab = $('.tab-content.active').data('index');

		//Switch tab 
		if(tabIndex != null && tabIndex != activeTab)
		{
			$('#tab-container').slideUp("medium", function(){
				HideAllTabs();

				//show selected tab
				$('#tab-' + tabIndex).removeClass('hidden');
				$('#tab-' + tabIndex).addClass('active');
				$('#tab-container').slideDown("medium");
			});
		}
	});
});

function HideAllTabs()
{
	$('.tab-content').addClass('hidden');
	$('.tab-content').removeAttr('style');
	$('.tab-content').removeClass('active');	
}
