// 自行加入的JS請寫在這裡
$(function () {
  // 首頁輪播
  let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
  let mpSliderPagination = [];
  mpSliderItem.forEach((item, index) => {
    mpSliderPagination.push(item.dataset.title);
  });
  var swiper = new Swiper('.mpSlider', {
    slidesPerView: 1,
    // spaceBetween: 30,
    // centeredSlides: true,
    loop: true,
    speed: 1000,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    // keyboard: {
    //   enabled: true,
    // },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      // clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //展覽與活動
  var swiper = new Swiper('.eventsSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  //桃園作家
  var swiper = new Swiper('.writerSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 70,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 70,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //作品文物典藏
  var swiper = new Swiper('.collectionSwiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: false,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  //cp燈箱輪播
  var swiper = new Swiper('.cpSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  //sp燈箱輪播
  var swiper = new Swiper('.spSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  //著作資源
  var swiper = new Swiper('.bookSwiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: false,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  //寫作年表
  var swiper = new Swiper('.chrSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //寫作年表
  var swiper = new Swiper('.workSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //照片故事
  var swiper = new Swiper('.storySwiper', {
    spaceBetween: 10,
    slidesPerView: 7.5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper('.storySwiper2', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // 廣告輪播
  // $('.adSlider').slick({
  //   mobileFirst: true,
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   arrow: true,
  //   lazyLoaded: true,
  //   lazyLoad: 'ondemand',
  //   ease: 'ease',
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         arrows: true,
  //       },
  //     },
  //   ],
  // });
  //燈箱slick+lightBox組合
  // $('.cp_slider').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 1500,
  //   pauseOnHover: true,
  //   pauseOnFocus: true,
  //   focusOnSelect: true,
  //   accessibility: true,
  //   lazyLoad: 'ondemand',
  //   ease: 'ease',
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 545,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false,
  //       },
  //     },
  //   ],
  // });
  //
  // $('.cppic_slider').slick({
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 1500,
  //   // pauseOnHover: true,
  //   // pauseOnFocus: true,
  //   // focusOnSelect: true,
  //   // accessibility: true,
  //   // lazyLoad: 'ondemand',
  //   // ease: 'ease',
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 545,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false,
  //       },
  //     },
  //   ],
  // });
  // cp_photo
  // $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
  //   var i = (currentSlide ? currentSlide : 0) + 1;
  //   $('.controls').html(i + '/' + slick.slideCount);
  // });
  // $('.Slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   swipe: false,
  //   swipeToSlide: false,
  //   lazyLoad: 'ondemand',
  //   asNavFor: '.Slider-nav',
  //   infinite: true,
  // });
  // $('.Slider-nav').slick({
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   asNavFor: '.Slider-for',
  //   dots: true,
  //   arrows: true,
  //   lazyLoad: 'ondemand',
  //   focusOnSelect: true,
  //   infinite: true,
  // });

  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
  //sticky sidebar
  // if ($('.stickySidebar').length > 0) {
  //   var stickySidebar = new StickySidebar('.stickySidebar', {
  //     containerSelector: '.main',
  //     topSpacing: 93,
  //     bottomSpacing: 0,
  //     minWidth: 768,
  //     resizeSensor: true,
  //   });
  // }
});

// tab功能
tabFunction({
  target: '.tabSet',
  openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
  openSwitch: true, // 是否可開合/切換
  autoClose: true, // 自動關閉其他開啟內容
  modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
  width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
  index: 0, // 預設開啟第幾個
});

// 固定header
// $(function () {
//   header_h = Math.floor($('header').outerHeight(true));
//   fixedheader_h = Math.floor($('.fixedheader').outerHeight(true) + 10);
//   $('.fixedheader').css('top', -fixedheader_h);
//   $(window).bind('scroll', function () {
//     if ($(this).scrollTop() > header_h) {
//       $('.fixedheader').css({ top: 0 }, 800, 'easeOutQuint');
//     } else {
//       $('.fixedheader').css({ top: -fixedheader_h }, 800, 'easeOutQuint');
//     }
//   });
// });

//切換列表或是區塊
$('.switchBlock li:first').on('click', function () {
  $('.lp .Flex-set').removeClass('typeList');
  $('.typeGrid').addClass('active');
  $('.typeList').removeClass('active');
});
$('.switchBlock li:last').on('click', function () {
  $('.lp .Flex-set').addClass('typeList');
  $('.typeList').addClass('active');
  $('.typeGrid').removeClass('active');
});

// adv_search
if ($('.adv_search').length > 0) {
  $('.adv_search').show();
  $('.btn-adv')
    .off()
    .click(function (e) {
      $('.adv_search').stop().slideToggle(400, 'easeOutCubic');
      e.preventDefault();
    });
}
