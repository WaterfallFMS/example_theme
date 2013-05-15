// Begin jQuery Stuff
jQuery.noConflict();

jQuery(document).ready(function($) { 

  $('h1,h2,h3.with-style').each(function(){
    if($(this).hasClass('skip')){ return; }
    
    var values = $(this).text().split(' ');
    var first = values.shift();
    var rest = values.join(' ');
    $(this).html("<span class='first'>"+first+"</span> <span class='second'>"+rest+"</span>");
  });
  
  $('.first_story .story_title a').each(function(){
    var values = $(this).text().split(' ');
    var first = values.shift();
    var rest  = values.join(' ');
    $(this).html("<span class='uppercase'>"+first+"</span> "+rest);
  });


  // Superfish
  jQuery('#nav ul').superfish({
    hoverClass: 'sfhover',
    delay: 400,
    animation: {opacity:'show'},
    autoArrows: false,
    speed: 'fast'
  });

  // rotating sliders
  $('#slide-image').append($('#slider-content img'));
  $('#text-box-inner').append($('#slider-content p'));
  jQuery('#slide-image').cycle({
    fx: 'fade',
    pause: 1,
    prev: '.left-btn',
    next: '.right-btn',
    timeout: 4000
  });
  jQuery('#text-box-inner').cycle({
    fx: 'fade',
    pause: 1,
    prev: '.left-btn',
    next: '.right-btn',
    timeout: 4000
  });
});