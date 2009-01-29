window.addEvent('domready', function() {
  
  // Dynamically loaded AJAX content
  $('loading').setStyle('display', 'none'); // hides the loading image
  var content = new Fx.Slide('ajax-content').hide(); // creates new Fx.Slide object from ajax-content div, also the hide() function hides the div when the page loads
  $('toggle-ajax').addEvent('click', function(e) { // adds an onClick event to toggle-ajax div
    e = new Event(e); 	
    if ($('toggle-ajax').hasClass('hidden')) { // checks if the content is visible
      $('ajax-content').empty() // empties the ajax-content
      $('loading').setStyle('display', 'block'); // displays the loading image
      new Ajax ('ajax-response.html', //url of file
      {method: 'get', //method
        update: $('ajax-content'), // element that will be updated with response
        onComplete: function() { 
        $('loading').setStyle('display', 'none'); //Hides the loading image 
          content.toggle(); //toggles the ajax-content
         } 		 
        }).request(); //sends the request
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

  // Toggle Paragraphs
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

  // Toggle Section Menu
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

  // Toggle List Items
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

  // Toggle Accordian
  var accordian = new Fx.Slide('accordian-block');
  $('toggle-accordian').addEvent('click', function(e) {
    e = new Event(e);
      accordian.toggle();
    if ($('toggle-accordian').hasClass('hidden')){
      $('toggle-accordian').removeClass('hidden').addClass('visible');
    }
    else {
      $('toggle-accordian').removeClass('visible').addClass('hidden');
    }
    e.stop(); 
  });

  // Toggle Blockquote
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

  // Toggle Tables
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

  // Toggle Forms
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

  // Toggle Search
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

  // Toggle Login Forms
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

  // Toggle Articles
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

});
