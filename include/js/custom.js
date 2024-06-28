  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })


  $('#openClosebtn').click(function () {
    
    
      if( $('#openClosebtn'). hasClass("open")){
          $('.outerbox > .data-toggle').html("Close All");
          $('.outerbox > .data-toggle'). removeClass("open");
          $('.outerbox > .data-toggle'). addClass("close");
          $('.explanation'). addClass("show");
          $(".collapse").collapse('show');
      }
      else{
          $('.outerbox > .data-toggle').html("Open All");
          $('.outerbox > .data-toggle'). removeClass("close");
          $('.outerbox > .data-toggle'). addClass("open");
          $('.explanation'). removeClass("show");
          $(".collapse").collapse('hide');
      }    
      
      // $('.openaccording').collapse('toggle');

  });

  $('#annotateid').click(function () {
      if($('.explanation'). hasClass("show"))
      {
          $('.explanation'). removeClass("show");
      }
      else{
          $('.explanation'). addClass("show");
      }
  });