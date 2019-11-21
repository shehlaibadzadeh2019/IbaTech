$(function(){
    $(".horizantal-menu-link").on("click", function(){
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
});

///scroll to top
$(window).scroll(function() {
    let height = $(window).height();
    ($(window).scrollTop() > height) ?  $('#button').addClass('show') : $('#button').removeClass('show');
});

$('#button').click(function(){
    $('html').animate({ scrollTop: 0 }, 'slow' );
  });


//hide-show section 
$( "#toggle" ).click(function() {
  $( "#popular_clients" ).slideToggle( "slow", function() {
  });
 
  ($( this ).html() == "Show") ? $( this ).text( "Hide" ) : $( this ).text( "Show" );
});
