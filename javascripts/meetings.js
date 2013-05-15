MEETING_COUNT = 5;

jQuery(document).ready(function($){
  $('#meetings').html('Loading...');

  var path = (window.location.pathname).split("/").slice(0,3);
  path.push('events');
  path = path.join('/');

  var today = new Date();
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  var displayedEvents = 0;

  $.ajax(path+".json",{
    success: function(data){
      $("#meetings").html('');
      
      if(data.length == 0) { $("#meetings").html('There are no meetings/events at this time'); }
      
      $.each(data, function(index,value){
        if(displayedEvents >= MEETING_COUNT){ return; }

        var start = new Date(value.start);
        if(start < today){ return; }

        start = start.toDateString().split(' ');

        var event = $('#meeting-sample').clone();
        event.removeAttr('id');
        event.find('.title a').html(value.title).attr('href', path+'/'+value.id);
        event.find('.meeting_content p').append(value.summary);
        event.find('.date_1').html(start[1]);
        event.find('.date_2').html(start[2]);
        event.show();
        $("#meetings").append(event);
        displayedEvents += 1;
      });
    },
    error: function(){
      $("#meetings").html('There are no meetings/events at this time');
    }
  });
});