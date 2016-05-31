$(document).ready(function(){

//press enter to add items
	$('#inputItems').submit(function(event){
		event.preventDefault();
		var content = $('#inputBox').val();
		if (content === ""){
			alert('Please enter an item')
		}
		else {
			$('.itemList ul').append("<li class='currentItem'><input type='checkbox' id='box'><label for='box'></label><span>" + content + "</span><img class='delete' src='images/delete.png'/></li>");
		}
		$('#inputItems')[0].reset();
	});

	$('.itemList ul').sortable();
});

assignlisteners();
function assignlisteners() {
	$('ul').on('click', '.delete', function(event){
		console.log('trash clicked');
		$(this).closest('li').remove();
	});	
	$('ul').on('click', '#box', function(event) {
		$(this).closest('li').toggleClass('strike');
		console.log('check clicked');
	});
}

