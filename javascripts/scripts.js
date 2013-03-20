// Begin jQuery Stuff
jQuery.noConflict();

jQuery(document).ready(function($) { 

  $('h1,h2,h3').each(function(){
    console.log($(this).hasClass('skip'));
    if($(this).hasClass('skip')){ return; }
    
    var values = $(this).text().split(' ');
    var first = values.shift();
    var rest = values.join(' ');
    $(this).html("<span class='first'>"+first+"</span><span class='second'>"+rest+"</span>");
  });


  // Superfish
  jQuery('#nav ul').superfish({
    hoverClass: 'sfhover',
    delay: 400,
    animation: {opacity:'show'},
    autoArrows: false,
    speed: 'fast'
  }); 
      
}); 