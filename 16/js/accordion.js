window.addEvent('domready', function() {
	var accordion = new Accordion('h3.atStart', 'div.atStart', {
		opacity: false,
		onActive: function(toggler, element){
			toggler.setStyle('font-weight', 'bold');
			toggler.setStyle('background', '#fff');
		},
	 
		onBackground: function(toggler, element){
			toggler.setStyle('font-weight', 'normal');
			toggler.setStyle('background', '#eee');
		}
	}, $('accordion'));
});
