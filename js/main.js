"use strict";

$(function () {
  $('.js-accordion').on('click', function () {
    $(this).find('.js-accordion-item').slideToggle();
    $(this).find('.js-accordion-btn').toggleClass('is-open');
  });
});