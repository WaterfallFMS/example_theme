$(document).ready(function() { 

  // Back to top fun scrolling
  $('a[href=#top]').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
    return false;
  }); 
  
  // Superfish
  $('#navigation ul').superfish({
    hoverClass: 'sfHover',
    delay: 400,
    animation: {opacity:'show'},
    autoArrows: false,
    speed: 'fast'
  }); 
      
}); 