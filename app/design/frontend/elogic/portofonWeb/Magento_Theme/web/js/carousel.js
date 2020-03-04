define([
        'jquery',
        'owlcarousel'
    ],
    function () {
        'use strict';
        console.log('123');
        jQuery.noConflict();
        jQuery(".owl-carousel").owlCarousel({
            nav: true,
            loop:true,
            autoplay:true,
            autoplayHoverPause:true,
            items:5,
            margin: 100,
            autoWidth: false,
            responsiveClass:true,
            responsive:{
                0:{
                    center: true,
                    items:1,
                    loop:true,
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:5,
                    nav:true,
                    loop:false
                }
            }
        })
    });
