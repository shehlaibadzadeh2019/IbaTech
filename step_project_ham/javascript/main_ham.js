"use strict";

///SERVICES
const tabsHeader = $('.tabs');
const tabsItems = $('.tab-content');
const tabsItemsContainer = $('.tabs-content');

tabsHeader.on('click', '.tab', function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
    $(tabsItems[$(this).index()]).addClass('active');
})

//AMAZING WORK SECTION//
let loadedImg=[
{   
    category: "graphic-design",
    imgSrc: "images/graphic-design2.jpg",
},
{   
    category: "graphic-design",
    imgSrc : "images/graphic-design3.jpg",
},
{   
    category: "graphic-design",
    imgSrc : "images/graphic-design4.jpg",
},
{   
    category: "graphic-design",
    imgSrc : "images/graphic-design5.jpg",
},
{   
    category: "graphic-design",
    imgSrc : "images/graphic-design6.jpg",
},
{   
    category: "graphic-design",
    imgSrc : "images/graphic-design7.jpg",
},
{   
    category: "graphic-design",
    imgSrc : "images/graphic-design8.jpg",
},
{   
    category: "graphic-design",
    imgSrc : "images/graphic-design9.jpg",
},
{   
    category: "graphic-design",
    imgSrc : "images/graphic-design10.jpg",
},
{   
    category: "graphic-design",
    imgSrc : "images/graphic-design11.jpg",
},
{   
    category: "graphic-design",
    imgSrc : "images/graphic-design12.jpg",
},
//web design category
{   
    category: "web-design",
    imgSrc : "images/web-design1.jpg",
},
{   
    category: "web-design",
    imgSrc : "images/web-design2.jpg",
},
{   
    category: "web-design",
    imgSrc : "images/web-design3.jpg",
},
{   
    category: "web-design",
    imgSrc : "images/web-design4.jpg",
},
{   
    category: "web-design",
    imgSrc : "images/web-design5.jpg",
},
{   
    category: "web-design",
    imgSrc : "images/web-design6.jpg",
},
{   
    category: "web-design",
    imgSrc : "images/web-design7.jpg",
},
//landing-pages
{   
    category: "landing-pages",
    imgSrc : "images/landing-page1.jpg",
},
{   
    category: "landing-pages",
    imgSrc : "images/landing-page2.jpg",
},
{   
    category: "landing-pages",
    imgSrc : "images/landing-page3.jpg",
},
{   
    category: "landing-pages",
    imgSrc : "images/landing-page4.jpg",
},
{   
    category: "landing-pages",
    imgSrc : "images/landing-page5.jpg",
},
{   
    category: "landing-pages",
    imgSrc : "images/landing-page6.jpg",
},
{   
    category: "landing-pages",
    imgSrc : "images/landing-page7.jpg",
},
//wordpress
{   
    category: "wordpress",
    imgSrc : "images/wordpress1.jpg",
},
{   
    category: "wordpress",
    imgSrc : "images/wordpress2.jpg",
},
{   
    category: "wordpress",
    imgSrc : "images/wordpress3.jpg",
},
{   
    category: "wordpress",
    imgSrc : "images/wordpress4.jpg",
},
{   
    category: "wordpress",
    imgSrc : "images/wordpress5.jpg",
},
{   
    category: "wordpress",
    imgSrc : "images/wordpress6.jpg",
},
{   
    category: "wordpress",
    imgSrc : "images/wordpress7.jpg",
},
{   
    category: "wordpress",
    imgSrc : "images/wordpress8.jpg",
},
{   
    category: "wordpress",
    imgSrc : "images/wordpress9.jpg",
},
{   
    category: "wordpress",
    imgSrc : "images/wordpress10.jpg",
},

];
let items = [];

// Create out new items
for(let item of loadedImg) {
    items.push(`
            <div class="all ${item.category} work-image-item">
            <img class="work-image-fixedsize" src="${item.imgSrc}" alt="IMG NOT FOUND"/>
            <div class="work-image-hover">
                <a href="#"><i class="fas fa-link"></i></a>
                <a href="#"><i class="fas fa-search"></i></a>
                <p class="img-header">creative design</p>
                <p class="img-description">Web design</p>
            </div>
        </div>
    `);
}

const inner =  $('.work-images');
inner.append(items.join(''));
let imageArr = $(".work-image-item"),  clickCount = 0;

$(document).ready( function loadMore(){
    $("#loader").hide();
    for (let index = 0; index < 12; index++) {
        $(imageArr[index]).show();
    }
    $("#loadMore").on("click", function(event) {
        clickCount++;
        $("#loader").show();
        $("#loadMore").hide();
        if (clickCount == 1) {
            setTimeout(()=>{
                $("#loader").hide();
                for (let index = 12; index < 24; index++) {
                    $(imageArr[index]).fadeIn("slow");
                }
                $("#loadMore").show();
            }, 1000);
        }
        else{                      // for the second click
            setTimeout(()=>{
                $("#loader").hide();
                for (let index = 24; index < imageArr.length; index++) {
                    $(imageArr[index]).fadeIn("slow");
                }
                $("#loadMore").hide();
            }, 1000);
        }
    });
});

$(document).ready( function imgfilter() {
    $(".work-tab-item").on("click", function() {
        $(".work-image-item").hide();
        $(".work-tab-item").removeClass("work-tab-item-active");
        $(this).addClass("work-tab-item-active");
        imageArr = document.querySelectorAll(`.${$(this).attr("data-type")}`);
        for (let index = 0; index < 12; index++) {
            $(imageArr[index]).show();
        }
        if ($(imageArr).length <= 12) {
            $("#loadMore").hide();
        } else {
            $("#loadMore").show();
        }
    });
});

// FEEDBACKS //






(() => {
        function Client(name, position, picture, cite) {
            this.name = name;
            this.position = position;
            this.picture = picture;
            this.cite = cite;
        };

        let client01 = new Client(
            'Mary Stark',
            'CEO',
            'images/person.jpg',
            'Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Morbi pulvinar odio eget aliquam facilisis. non dictum odio nisi quis massa.'
        );
        let client02 = new Client(
            'Caroline Dofort',
            'Manager',
            'images/person1.jpg',
            'dig. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. '
        );
        let client03 = new Client(
            'Mary Black',
            'Producing Accounter',
            'images/person2.jpg',
            'Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. '
        );
        let client04 = new Client(
            'John Bolt',
            'UX Designer',
            'images/person3.jpg',
            'Integer dignissim, augue tempus ucies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Tempus ultricies luctus, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. '
        );
      
        let clients = [client01, client02, client03, client04];


        let $facesCarousel = $('.faces-carousel');

        for (let i = 0; i < clients.length; i++) {
            let $face = $(`<div class="face" data-index="${i}" style="background-image: url(${clients[i].picture});"></div>`);

            if (i === 2) {
                $face.addClass('selected')
            };
            if (i < 1 || i > clients.length) {
                $face.addClass('hidden')
              }  ;
            $facesCarousel.append($face);

        }
        ;

        displayFeedback();

        function displayFeedback() {

            let i = +$('.faces-carousel > .selected').attr('data-index');

            $('.saying-cite p').text(clients[i].cite);
            $('.saying-name p:nth-child(1)').text(clients[i].name);
            $('.saying-name p:nth-child(2)').text(clients[i].position);
            $('.saying-pic-face').css({backgroundImage: `url(${clients[i].picture})`});
        };


        $('.face').on('click', moveFaceUp);

        function moveFaceUp() {

            $('.faces-carousel > .selected').removeClass('selected')
            $(this).addClass('selected');

            displayFeedback();
        };


        $('.right-btn').on('click', function () {
            $('.face').off('click', moveFaceUp);

            let $selected = $('.faces-carousel > .selected');
            $selected.removeClass('selected');
            $selected.next().addClass('selected');
            displayFeedback();

            if ($($('.face')[$('.face').length - 1]).hasClass('selected')) {
                $($('.face')[0]).addClass('hidden');
                $($('.face')[$('.face').length - 1]).removeClass('hidden');

                $facesCarousel.append($($('.face')[0]).clone(true));
                $('.face')[0].remove();

            }
            ;
            $('.face').on('click', moveFaceUp);
        });


        $('.left-btn').on('click', function () {
            $('.face').off('click', moveFaceUp);

            let $selected = $('.faces-carousel > .selected');
            $selected.removeClass('selected');
            $selected.prev().addClass('selected');
            displayFeedback();

            if ($($('.face')[0]).hasClass('selected')) {
                $($('.face')[$('.face').length - 1]).addClass('hidden');
                $($('.face')[0]).removeClass('hidden');

                let lastFace = $('.face')[$('.face').length - 1];
                $($('.face')[0]).removeClass('hidden');
                ($('.face')[0]).before(lastFace.cloneNode(true));
                lastFace.remove();
            }
            ;
            $('.face').on('click', moveFaceUp);
        });

    })();





