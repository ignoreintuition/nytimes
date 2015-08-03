$(function(){
    $('.panel-button').on('click', function(){
		var panelId = $(this).attr('data-panel');
		$('#'+panelId).toggle();
    });
	
});
	
