window.addEvent('domready', function() {

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

	// Toggle Paragraphs
	if ($('toggle-paragraphs')) {
		var paragraphs = new Fx.Slide('paragraphs').hide(); //creates new Fx.Slide object from paragraphs div
		$('toggle-paragraphs').addEvent('click', function(e) { //Adds an onClick event to toggle-paragraphs div
			e = new Event(e);
				paragraphs.toggle(); //toggles the div
			if ($('toggle-paragraphs').hasClass('hidden')){
				$('toggle-paragraphs').removeClass('hidden').addClass('visible');
			}
			else {
				$('toggle-paragraphs').removeClass('visible').addClass('hidden');
			}
			e.stop(); //this makes sure that the user wont be sent to given url (or that the page refreshes when using dummy url like "#") if the clicked element was a link 
		});
	}

	// Toggle Section Menu
	if ($('toggle-section-menu')) {
		var sectionmenu = new Fx.Slide('section-menu');
		$('toggle-section-menu').addEvent('click', function(e) {
			e = new Event(e);
				sectionmenu.toggle();
			if ($('toggle-section-menu').hasClass('hidden')){
				$('toggle-section-menu').removeClass('hidden').addClass('visible');
			}
			else {
				$('toggle-section-menu').removeClass('visible').addClass('hidden');
			}
			e.stop(); 
		});
	}

	// Toggle List Items
	if ($('toggle-list-items')) {
		var listitems = new Fx.Slide('list-items');
		$('toggle-list-items').addEvent('click', function(e) {
			e = new Event(e);
				listitems.toggle();
			if ($('toggle-list-items').hasClass('hidden')){
				$('toggle-list-items').removeClass('hidden').addClass('visible');
			}
			else {
				$('toggle-list-items').removeClass('visible').addClass('hidden');
			}
			e.stop(); 
		});
	}

	// Toggle Accordion
	if ($('toggle-accordion')) {
		var accordion = new Fx.Slide('accordion');
		$('toggle-accordion').addEvent('click', function(e) {
			e = new Event(e);
				accordion.toggle();
			if ($('toggle-accordion').hasClass('hidden')){
				$('toggle-accordion').removeClass('hidden').addClass('visible');
			}
			else {
				$('toggle-accordion').removeClass('visible').addClass('hidden');
			}
			e.stop(); 
		});
	}

	// Toggle Blockquote
	if ($('toggle-blockquote')) {
		var blockquote = new Fx.Slide('blockquote');
		$('toggle-blockquote').addEvent('click', function(e) {
			e = new Event(e);
				blockquote.toggle();
			if ($('toggle-blockquote').hasClass('hidden')){
				$('toggle-blockquote').removeClass('hidden').addClass('visible');
			}
			else {
				$('toggle-blockquote').removeClass('visible').addClass('hidden');
			}
			e.stop(); 
		});
	}

	// Toggle Tables
	if ($('toggle-tables')) {
		var tables = new Fx.Slide('tables');
		$('toggle-tables').addEvent('click', function(e) {
			e = new Event(e);
				tables.toggle();
			if ($('toggle-tables').hasClass('hidden')){
				$('toggle-tables').removeClass('hidden').addClass('visible');
			}
			else {
				$('toggle-tables').removeClass('visible').addClass('hidden');
			}
			e.stop(); 
		});
	}

	// Toggle Forms
	if ($('toggle-forms')) {
		var forms = new Fx.Slide('forms');
		$('toggle-forms').addEvent('click', function(e) {
			e = new Event(e);
				forms.toggle();
			if ($('toggle-forms').hasClass('hidden')){
				$('toggle-forms').removeClass('hidden').addClass('visible');
			}
			else {
				$('toggle-forms').removeClass('visible').addClass('hidden');
			}
			e.stop(); 
		});
	}

	// Toggle Search
	if ($('toggle-search')) {
		var search = new Fx.Slide('search');
		$('toggle-search').addEvent('click', function(e) {
			e = new Event(e);
				search.toggle();
			if ($('toggle-search').hasClass('hidden')){
				$('toggle-search').removeClass('hidden').addClass('visible');
			}
			else {
				$('toggle-search').removeClass('visible').addClass('hidden');
			}
			e.stop(); 
		});
	}

	// Toggle Login Forms
	if ($('toggle-login-forms')) {
		var loginforms = new Fx.Slide('login-forms');
		$('toggle-login-forms').addEvent('click', function(e) {
			e = new Event(e);
				loginforms.toggle();
			if ($('toggle-login-forms').hasClass('hidden')){
				$('toggle-login-forms').removeClass('hidden').addClass('visible');
			}
			else {
				$('toggle-login-forms').removeClass('visible').addClass('hidden');
			}
			e.stop(); 
		});
	}

	// Toggle Articles
	if ($('toggle-articles')) {
		var articles = new Fx.Slide('articles');
		$('toggle-articles').addEvent('click', function(e) {
			e = new Event(e);
				articles.toggle();
			if ($('toggle-articles').hasClass('hidden')){
				$('toggle-articles').removeClass('hidden').addClass('visible');
			}
			else {
				$('toggle-articles').removeClass('visible').addClass('hidden');
			}
			e.stop(); 
		});
	}

});