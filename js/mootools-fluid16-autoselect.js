window.addEvent('domready', function() {

	// Fluid 16-column Grid
	// Auto-Select Toggle Elements
	
	// Select all boxes with h2 anchor elements and toggle the next div
	// The toggle-ajax anchor is excluded or the AJAX content box won't work
	$$('.box h2 a[id!=toggle-ajax]').each(function(item) {
		item.setStyle('cursor', 'pointer');
		var elToHide = item.getParent('h2').getNext('div');
		if (elToHide) {
			var mySlide = new Fx.Slide(elToHide);
			item.store('fx', mySlide);

			if (item.hasClass('hidden')){
				mySlide.hide();
			}

			item.addEvent('click', function(e) {
				e.stop();
				var fx = this.retrieve('fx');
				fx.toggle();

				if (item.hasClass('hidden')){
					item.removeClass('hidden').addClass('visible');
				}
				else {
					item.removeClass('visible').addClass('hidden');
				}
			});
		}
	});

	// Kwick Box
	if ($('kwick-box')) {
		var kwicks = $$('#kwick .kwick');
		var fx = new Fx.Elements(kwicks, {wait: false, duration: 200, transition: Fx.Transitions.quadOut});
		kwicks.each(function(kwick, i){
			kwick.addEvent('mouseenter', function(e){
				var obj = {};
				obj[i] = {
					'width': [kwick.getStyle('width').toInt(), 485]
				};
				kwicks.each(function(other, j){
					if (other != kwick){
						var w = other.getStyle('width').toInt();
						if (w != 125) obj[j] = {'width': [w, 125]};
					}
				});
				fx.start(obj);
			});
		});
		
		$('kwick').addEvent('mouseleave', function(e){
			var obj = {};
			kwicks.each(function(other, j){
				obj[j] = {'width': [other.getStyle('width').toInt(), 215]};
			});
			fx.start(obj);
		});
	}
	
	// Accordion Section Menu
	if ($('section-menu')) {
		var accordion = new Accordion('a.menuitem', 'ul.submenu', {
			opacity: false,
			onActive: function(toggler, element){
				toggler.addClass('current');
				element.addClass('current');
			},
			onBackground: function(toggler, element){
				toggler.removeClass('current');
				element.removeClass('current');
			}
		}, $('section-menu'));
	}

	// Accordion Content
	if ($('accordion')) {
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
	}

	// Toggle and load AJAX content
	if ($('toggle-ajax')) {
		// Dynamically loaded AJAX content
		$('loading').setStyle('display', 'none'); // hides the loading image
		var content = new Fx.Slide('ajax-content').hide(); // creates new Fx.Slide object from ajax-content div, also the hide() function hides the div when the page loads
		$('toggle-ajax').addEvent('click', function(e) { // adds an onClick event to toggle-ajax div
			e = new Event(e); 	
			if ($('toggle-ajax').hasClass('hidden')) { // checks if the content is visible
				$('ajax-content').empty() // empties the ajax-content
				$('loading').setStyle('display', 'block'); // displays the loading image

				var req = new Request.HTML({
					method: 'get',
					url: '/fluid960gs/data/ajax-response.html',
					update: $('ajax-content'),
					onComplete: function(html) { 
						$('loading').setStyle('display', 'none'); //Hides the loading image
						content.toggle(); //toggles the ajax-content
					}
				}).send();
			}
			else { 
				content.toggle(); //in case we dont want to send ajax request, we just slide it out
			}
			if ($('toggle-ajax').hasClass('hidden')){
				$('toggle-ajax').removeClass('hidden').addClass('visible');
			}
			else {
				$('toggle-ajax').removeClass('visible').addClass('hidden');
			}
			e.stop(); //this makes sure that the user wont be sent to given url (or that the page refreshes when using dummy url like "#") if the clicked element was a link 
		});
	}

	// Toggle Grid
	if ($('toggle-grid')) {
		var grid = new Fx.Slide('grid').hide(); //creates new Fx.Slide object from grid div
		$('toggle-grid').addEvent('click', function(e) { //Adds an onClick event to toggle-grid div
			e = new Event(e);
				grid.toggle(); //toggles the div
			if ($('toggle-grid').hasClass('hidden')){
				$('toggle-grid').removeClass('hidden').addClass('visible');
			}
			else {
				$('toggle-grid').removeClass('visible').addClass('hidden');
			}
			e.stop(); //this makes sure that the user wont be sent to given url (or that the page refreshes when using dummy url like "#") if the clicked element was a link 
		});
	}
});