/*global $*/
document.addEventListener("turbolinks:load", function () {
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});
});

/*global $*/
$(document).on('turbolinks:load', function() {
  $('.slider').slick({
    dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
  })
});