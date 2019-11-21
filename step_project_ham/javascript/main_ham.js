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
// Breaking news

// $(".post").mouseover(()=>{
//     $(".caption_title").html("Amazing Image Post")
// })
// $(".post").mouseout(()=>{
//     $(".caption_title").html("Amazing Blog Post")
// })
let post = document.querySelectorAll(".post");
let caption = document.querySelectorAll(".caption_title");
console.log(caption);
for (let i = 0; i< post.length; i++) {
    post[i].addEventListener("mouseover", ()=>{
        caption[i].innerHTML = "Amazing Image Post";
    })
    post[i].addEventListener("mouseout", ()=>{
        caption[i].innerHTML = "Amazing Blog Post";
    })
}

// FEEDBACKS //

const $container = $('.swiper-container');
const $employee = $('.employee');
const $carousel = $container.find('.carousel');
const $slider = $carousel.find('.slider');

new Swiper('.swiper-container',{
    loop: true,
        navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            },
        })

let i=1;
$(".next").on("click", ()=>{
    if(i > 0  && i < 4){
        i++;
    }
   else if(i==4){
       i=1;
   }
    $slider.find('.active').removeClass('active');
    $(".img"+i).addClass('active');
})

$(".prev").on("click", ()=>{
    if(i > 1  && i < 5){
        i--;
    }
    else if(i==1){
        i=4;
    }
    $slider.find('.active').removeClass('active');
    $(".img"+i).addClass('active');
})
