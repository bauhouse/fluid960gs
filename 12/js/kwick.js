window.addEvent('domready', function() {
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
});
