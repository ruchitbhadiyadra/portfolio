$(document).ready(function(){
    $(window).scroll(function(){
        // sticky header on scroll script
        if(this.scrollY > 20){
            $('header').addClass("sticky");
        }else{
            $('header').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front end developer","Fresher","PHP Devloper", "Web Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front end developer","Fresher" ,"PHP Devloper", "Web Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// loader
$(window).on("load", function () {
    $(".loader-overlay").fadeOut(5000);
});

$(window).scroll(function () {
    // header
    if ($(this).scrollTop() > 50) {
    $("header").addClass("active");
    } else {
    $("header").removeClass("active");
    }

    // back to top
    if ($(this).scrollTop() > 50) {
    $(".top").fadeIn();
    } else {
    $(".top").fadeOut();
    }
});

$(document).ready(function () {
    $(".top").click(function () {
    $("html").animate({ scrollTop: 0 });
    });
});

// theme switcher
$(document).ready(function () {
    $("li").click(function () {
        var abc = $(this).css("background-color");
        $(":root").css("--theme-color", abc);
    });

    $(".icon").click(function () {
        $(".switch").toggleClass("theme-switch");
    });
});

