"use strict";

$(function () {
  $('.js-accordion-btn').on('click', function () {
    $(this).toggleClass('is-open').closest('.js-accordion').find('.js-accordion-item').slideToggle();
  });
});