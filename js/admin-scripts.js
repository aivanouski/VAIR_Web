'use strict';

$(document).ready(function () {

    $('#nav-btn').click(function () {
        $(this).toggleClass('open');
        $('body').toggleClass('full-screen');
        $('.mobile-container').toggleClass('open');
    })

    $('.transactions-table .divTableRow').click(function () {
        $(this).toggleClass('open');
    })


    if ($(window).width() < 651) {

        var mobileRow3Text = $('.second-auth__row.qr-auth').find('.row-title').attr('data-mobile-text');

        $('.second-auth__row.qr-auth').find('.row-title').text(mobileRow3Text);

    }

    var cryptoCashSlider = $('.cash-slider').owlCarousel({
        items: 1,
        loop:false,
        dots:false,
        autoWidth: true,
        responsive:{
            450:{
                margin:20
            },
            0: {
                margin:10
            }
        },
    });

    cryptoCashSlider.on('changed.owl.carousel', function(event) {

        if ($(window).width() < 1300) {

            if (event.item.index == 9) {

                $('.slider-container').find('.slider-arrow-right').css('display','none');

            } else {

                $('.slider-container').find('.slider-arrow-right').css('display','block');

            }

        } else {


            if (event.item.index == 8 || event.item.index == 9) {

                $('.slider-container').find('.slider-arrow-right').css('display','none');

            } else {

                $('.slider-container').find('.slider-arrow-right').css('display','block');

            }


        }

    });

    function setMarginSlider() {

        var sliderMargin = parseInt($('.admin-main').find('.ad-container').css('margin-left')),
            sliderPadding = parseInt($('.admin-main').find('.ad-container').css('padding-left'));

        $('.cash-slider').css('margin-left',sliderMargin + sliderPadding + 'px');

        if ($(window).width() > 800) {

        }

        if ($(window).width() < 800) {

        }

    }

    setMarginSlider();

});