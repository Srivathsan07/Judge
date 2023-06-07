$(document).ready(function(){
/*login toggle*/
$(".toggle-password").click(function() {
    $(this).toggleClass("toggle-eye-open");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  /*input label color*/
  //   $(".flex_froms .form-group input").focus(function(){
  //   $(".flex_froms .form-group label").addClass("dsf")
  //   });
 

  $('.flex_froms .form-group').on('click',function(){ 
    $('.flex_froms .form-group').removeClass('activeLabel');
    $(this).addClass('activeLabel');
});
  });


/*Dashboard base scripts*/
 

$(function () {

'use strict';

var aside = $('.side-nav'),
    showAsideBtn = $('.show-side-btn'),
    contents = $('#contents'),
    _window = $(window)

showAsideBtn.on("click", function () {
  $("#" + $(this).data('show')).toggleClass('show-side-nav');
  contents.toggleClass('margin');
});

if (_window.width() <= 767) {
  aside.addClass('show-side-nav');
}

_window.on('resize', function () {
  if ($(window).width() > 767) {
    aside.removeClass('show-side-nav');
  }
});

// dropdown menu in the side nav
var slideNavDropdown = $('.side-nav-dropdown');

$('.side-nav .categories li').on('click', function () {

  var $this = $(this)

  $this.toggleClass('opend').siblings().removeClass('opend');

  if ($this.hasClass('opend')) {
    $this.find('.side-nav-dropdown').slideToggle('fast');
    $this.siblings().find('.side-nav-dropdown').slideUp('fast');
  } else {
    $this.find('.side-nav-dropdown').slideUp('fast');
  }
});

$('.side-nav .close-aside').on('click', function () {
  $('#' + $(this).data('close')).addClass('show-side-nav');
  contents.removeClass('margin');
});
});


 
 
 
