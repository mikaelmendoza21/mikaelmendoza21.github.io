var greeting = 'dear visitor';
var $modal;

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