"use strict";

$(function () {
  $('.js-accordion').on('click', function () {
    $(this).find('.js-accordion-item').slideToggle();
    $(this).find('.js-accordion-btn').toggleClass('is-open');
  });
  $('.js-burger').on('click', function () {
    $(this).toggleClass('is-active').siblings('.js-burger-modal').toggleClass('is-open');
    $('body').toggleClass('no-scroll');
    $('.js-overlay').toggleClass('is-visible');
  });
  $('.js-overlay').on('click', function () {
    $(this).removeClass('is-visible');
    $('.js-burger').removeClass('is-active');
    $('.js-burger-modal').removeClass('is-open');
    $('body').removeClass('no-scroll');
  });
});