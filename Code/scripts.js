$('#s1_navicon').click(function (e) { 
  $('#s1_nav').animate({
    left: "+=100%"
  }, 300, function() {});

  $('body').css('overflow', 'hidden');
  e.preventDefault();

});

$('#s1_naviconclose').click(function (e) { 
  $('#s1_nav').animate({
    left: "-=100%"
  }, 300, function() {});

  $('body').css('overflow', 'visible');
  e.preventDefault();

});

$('#s1_nav a').click(function (e) { 
  $('#s1_nav').animate({
    left: "-=100%"
  }, 300, function() {});

  $('body').css('overflow', 'visible');
  e.preventDefault();

});


