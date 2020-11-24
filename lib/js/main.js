/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  $('.carousel').carousel();
});

$(window).scroll(function() {
  var curr_loc = $(this).scrollTop();

    if(curr_loc >= $('nav.navbar').height() + 50) {
        $('nav.navbar').addClass('sticky');
    } else {
       $('nav.navbar').removeClass('sticky');
    }
});