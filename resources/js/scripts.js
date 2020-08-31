/*global $ */
/*eslint-env jquery*/



$('document').ready(function () {
    
//    -------------------- STICKY NAVIGATION --------------------
    
    $('.sticky-section-blog').waypoint(function (direction) {
        if (direction == "down"){
            $('nav').addClass('sticky-nav');
        }
        else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
        offset: '60px;'
    });
    
  
//    -------------------- HAMBURGER CLICK --------------------
    $('.click-nav-menu').click(function () {
        var iconMenu = $('.click-nav-menu ion-icon');
        
        if (iconMenu.attr("name") == "menu-outline") {
            iconMenu.attr("name", "close-outline");
        }
        else{
            iconMenu.attr("name","menu-outline");
        }
        $('.show-main-nav').slideToggle();
    });  
    
    
//    -------------------- SIGN UP SCROLL --------------------
    
    $('.find-section-signup').click(function () {
        var targetOffset = $('.scroll-section-signup').offset().top - 60;
        $('html, body').animate({scrollTop: targetOffset},1000);
    });
    
//    -------------------- GOOD READS SCROLL --------------------
    
    $('.find-section-favourites').click(function () {
        var targetOffset = $('.scroll-section-favourites').offset().top - 20;
        $('html, body').animate({scrollTop: targetOffset},1000);
    });
    
//    -------------------- BOOKISH BLOG SCROLL --------------------
    
    $('.find-bookish-blog').click(function () {
        var targetOffset = $('.scroll-bookish-blog').offset().top - 60;
        $('html, body').animate({scrollTop: targetOffset},1000);
    });
    
//    -------------------- BOOK TOWNS SCROLL --------------------
    
    $('.find-book-towns').click(function () {
        var targetOffset = $('.scroll-book-towns').offset().top - 60;
        $('html, body').animate({scrollTop: targetOffset},1000);
    });
  
//    -------------------- HOW IT WORKS SCROLL --------------------
    
    $('.find-section-procedures').click(function () {
        var targetOffset = $('.scroll-section-procedures').offset().top - 60;
        $('html, body').animate({scrollTop: targetOffset},1000);
    });
    

});