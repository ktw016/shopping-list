$(document).ready(function(){

//press enter to add items
	$('#inputItems').submit(function(event){
		event.preventDefault();
		var content = $('#inputBox').val();
		if (content === ""){
			alert('Please enter an item')
		}
		else {
			$('.itemList ul').append("<li class='currentItem'><img class='Checked' src='images/checked.png'/>" + " " + content + " " + "<img src='images/delete.png'/ class='delete'></li>");
		}
		$('#inputItems')[0].reset();
	});
	
});

assignlisteners();
function assignlisteners() {
	$('ul').on('click', '.delete', function(event){
		console.log('trash clicked');
		$(this).closest('li').remove();
	});	
	$('ul').on('click', '.Checked', function(event) {
		$(this).closest('li').toggleClass('strike');
		console.log('check clicked');
	});
}

