$('.btn').click(function() {
	ga('send', 'event', 'button', 'click', $(this).data('gae'));
});