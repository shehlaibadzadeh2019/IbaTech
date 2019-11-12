// JQUERY 

const tabsHeader = $('.tabs');
const tabsItems = $('.tabs-content-item');
const tabsItemsContainer = $('.tabs-content');

tabsHeader.on('click', '.tabs-title', function() {

    $('.active').removeClass('active');
    $(this).addClass('active');
    $(tabsItems[$(this).index()]).addClass('active');

})

