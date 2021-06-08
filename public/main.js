$(document).ready(function() {


    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function() {

        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');

        if ($(window).scrollTop() > 10) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }

    });

    $('.facility').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    var todaysDate = new Date();
    var year = todaysDate.getFullYear();
    var month = ("0" + (todaysDate.getMonth() + 1)).slice(-2);
    var day = ("0" + todaysDate.getDate()).slice(-2);
    var minDate = (year + "-" + month + "-" + day);

    $('#date-picker').val(minDate);
    $('#date-picker').attr('min', minDate);

});