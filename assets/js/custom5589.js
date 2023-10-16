// Header Scroll Sticky
$(window).scroll(function () {
  if ($(window).scrollTop() > 110) {
    $('.headerSec').addClass('fixed-header');
  }else {
    $('.headerSec').removeClass('fixed-header');
  }
});

// Top Header Slide
$('.offerSlide').owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000,
  nav: false,
  dots: true,
})

// get app linkBar
// $(window).scroll(function () {
//  
//  // var buttonpos = $("body").height() - $(".footerSec .disclaimer ul").position().top;
//
//   var totalArea = $("body").height() - $(window).height();
//   totalArea = totalArea - buttonpos;
//
//   if ($(window).scrollTop() > 150 && $(window).scrollTop() < totalArea) {
//     $('.getlinkBox').addClass('fixed-getlink');
//   }
//   else {
//     $('.getlinkBox').removeClass('fixed-getlink');
//   }
// });

// get app linkBar
$(window).scroll(function () {
  if ($(window).scrollTop() >= 320) {
    $('.getlinkBox').addClass('fixed-getlink');
  }
  else {
    $('.getlinkBox').removeClass('fixed-getlink');
  }
});


/*on scroll apply class ani on animation*/
var $animation_elements = $('.animation');
var $window = $(window);
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  //var window_bottom_position = (window_top_position + window_height);
  var window_bottom_position = window_top_position + (window_height - 60);

  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('ani');
    } else {
      //$element.removeClass('ani');
    }
  });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


// Tabs
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

$('#tabs-nav li').click(function () {
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();

  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


// Accordian
$(document).ready(function ($) {
  $('.accordion').find('.accordion-toggle').click(function () {
    var isActive = $(this).hasClass("active");
    $('.accordion-toggle').removeClass('active')
    if (!isActive) {
      $(this).toggleClass('active');
    }

    $(this).next().slideToggle('fast');
    //Hide the other panels
    $(".accordion-content").not($(this).next()).slideUp('fast');

  });
  let year = new Date().getFullYear();
  $('#copyright').text(year);
});



// Device dedect
$(".download_ios").hide();
$(".download_android").hide();
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    $(".download_ios").show();
  } else {
    $(".download_android").show();
  }
} else {
  $(".download_ios").show();
  $(".download_android").show();
}


// Get App Link

function sendLink(type) {
  let mobileNumeber = "";
  let message = $(".message");
  if (type == 'header') {
    message = $(".message");
    mobileNumeber = $(".mobilenumber").val();
  }
  else {
    message = $(".message_footer");
    mobileNumeber = $(".mobilenumberfooter").val();
  }
  if (mobileNumeber && mobileNumeber != '') {
    if (mobileNumeber.length != 10) {
      $(message).css('color', '#c4002a').html('Please enter a valid 10 digit mobile number').fadeIn().delay(5000).fadeOut();
    }
    else if (!/^[6789]\d{9}$/.test(mobileNumeber)) {
      document.getElementById("mobilenumber").focus()
      $(message).css('color', 'red').html('Please enter a valid 10 digit mobile number').fadeIn().delay(5000).fadeOut();
    }
    else {
      var myHeaders = new Headers();
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch("https://web.myteam11.com/apk/downlaod?mobile=" + mobileNumeber + "&gametype=8", requestOptions)
        .then(response => response.text())
        .then(function (result) {
          $(message).css('color', '#47ba38').html(result).fadeIn().delay(5000).fadeOut();
          $(".mobilenumber").val = "";
          $(".mobilenumberfooter").val = "";
        })
        .catch(error => console.log('error', error));
    }
  }
  else {
    $(message).css('color', 'red').html('Please enter mobile number').fadeIn().delay(5000).fadeOut();
  }
}

// How To Play page Slide
setTimeout(function () {
  $('.howtoplaySlide').owlCarousel({
    loop: false,
    margin: 0,
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    nav: true,
    dots: true,
  })
}, 0);

//URL Decoder
function urlDector(name, url) {
  // debugger

  if (!url) url = location.href;
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(url);
  return results == null ? null : results[1];


}

// Pixel code

function downloadApp(t) {
  return fbq("track", "PageView", {
    value: 0,
    currency: "INR"
  }), void 0 !== t && (window.location = t), !1
}


// bottom download bar
$(".btmDownloadApp_desktop").show();
$(".btmDownloadApp_mobile").hide();
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    $(".btmDownloadApp_mobile").show();
    $(".btmDownloadApp_desktop").hide();
  } else {
    $(".btmDownloadApp_mobile").show();
    $(".btmDownloadApp_desktop").hide();
  }
} else {
  $(".btmDownloadApp_desktop").show();
  $(".btmDownloadApp_mobile").hide();
}
