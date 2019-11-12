$(function(){
    $(".horizantal-menu-link").on("click", function(){
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
});

///scroll to top
$(window).scroll(function() {
    ($(window).scrollTop() > 800) ?  $('#button').addClass('show') : $('#button').removeClass('show');
});

$('#button').click(function(){
    $('html').animate({ scrollTop: 0 }, 'slow' );
  });


//hide-show section 
$( "#toggle" ).click(function() {
  $( "#popular_clients" ).slideToggle( "slow", function() {
  });
});