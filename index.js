var greeting = 'dear visitor';
var $modal;
var isDark = false; // TODO: read from cookie
var switchToDarkMessage = 'Dark Theme';
var switchToLightMessage = 'Light Theme';

$(document).ready(function(){
	console.log(`Hello ${greeting}!`);
	console.log('Mikael A. Mendoza wuz here ;)');

	$modal = $('#modal-popup');
});

function showCodingExperience(){
	console.log(`Let's see my experience as of ${new Date().toDateString()}`);

	var codingHistoryTitle = 'I have experience with:';
	var codingExperience = ['C# .Net', 'PHP', 'Node.js', 'Java Android'];

	$modal.find('.modal-title').html(codingHistoryTitle);
	$modal.find('.modal-content-text').html(codingExperience.join('<br/>'));

	$modal.modal('show');
}

function toggleDarkTheme(){
	$('body').toggleClass('darkened');
	$('.modal-content').toggleClass('darkened');

	if($('body').hasClass('darkened')){
		isDark = true;
		$('#theme-toggler').html(switchToLightMessage);
		$('#theme-toggler').removeClass('btn-dark').addClass('btn-light');
	}
	else{
		isDark = false;
		$('#theme-toggler').html(switchToDarkMessage);
		$('#theme-toggler').removeClass('btn-light').addClass('btn-dark');
	}
	// TODO: Collapse $('#navbar-toggler')
}

