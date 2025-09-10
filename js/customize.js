// 自行加入的JS請寫在這裡
$(function () {
  /*
  ============================================================
    通用 Swiper 初始化函式 (含 WCAG 播放/暫停按鈕) - v2
  ============================================================
  */
  function initializeSwiper(selector, options) {
    const swiperEl = document.querySelector(selector);
    if (!swiperEl) {
      return null;
    }

    const needsPlayPauseBtn = options.autoplay && typeof options.autoplay === 'object';
    let swiperInstance = null; // 先宣告 swiper 實例變數

    if (needsPlayPauseBtn) {
      const playPauseBtn = document.createElement('button');
      playPauseBtn.type = 'button';
      playPauseBtn.className = 'swiper-play-pause-btn';

      const swiperWrapper = swiperEl.querySelector('.swiper-wrapper');
      if (swiperWrapper) {
        if (!swiperWrapper.id) {
          swiperWrapper.id = `swiper-wrapper-${selector.replace(/[^a-zA-Z0-9]/g, '')}`;
        }
        playPauseBtn.setAttribute('aria-controls', swiperWrapper.id);
      }

      // 將按鈕更新邏輯封裝
      const updatePlayPauseButton = (isPlaying) => {
        playPauseBtn.classList.toggle('is-playing', isPlaying);
        playPauseBtn.setAttribute('aria-label', isPlaying ? '暫停輪播' : '播放輪播');
      };

      // 附加事件監聽器到 options 中
      const originalOnEvents = options.on || {};
      options.on = {
        ...originalOnEvents,
        // 初始化後和狀態改變時更新按鈕
        init: (swiper) => {
          updatePlayPauseButton(swiper.autoplay.running);
          if (originalOnEvents.init) originalOnEvents.init(swiper);
        },
        autoplayStart: (swiper) => {
          updatePlayPauseButton(true);
          if (originalOnEvents.autoplayStart) originalOnEvents.autoplayStart(swiper);
        },
        autoplayStop: (swiper) => {
          updatePlayPauseButton(false);
          if (originalOnEvents.autoplayStop) originalOnEvents.autoplayStop(swiper);
        },
        // 當使用者互動時，Swiper V8+ 會觸發 autoplayStop，所以這個可以確保同步
        userInteraction: (swiper) => {
          // 這個事件在某些版本可能沒有，但加上無妨
          if (originalOnEvents.userInteraction) originalOnEvents.userInteraction(swiper);
        },
      };

      // 綁定點擊事件
      playPauseBtn.addEventListener('click', () => {
        if (swiperInstance && swiperInstance.autoplay) {
          if (swiperInstance.autoplay.running) {
            swiperInstance.autoplay.stop();
          } else {
            swiperInstance.autoplay.start();
          }
        }
      });

      // 插入按鈕
      // swiperEl.appendChild(playPauseBtn);
      swiperEl.prepend(playPauseBtn);
    }

    // 初始化 Swiper 並儲存實例
    swiperInstance = new Swiper(swiperEl, options);

    return swiperInstance;
  }

  /*
  ============================================================
    個別 Swiper 的設定與初始化
  ============================================================
  */

  // --- 首頁輪播 ---
  initializeSwiper('.mpSlider', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false, // 互動後 autoplay 不會停止，按鈕狀態需同步
      pauseOnMouseEnter: true, // 滑鼠移入時暫停，這也會觸發 autoplayStop
    },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    pagination: {
      el: '.mpSlider .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.mpSlider .swiper-button-next',
      prevEl: '.mpSlider .swiper-button-prev',
    },
  });

  // --- 以下是其他 Swiper 的初始化，邏輯相同 ---

  initializeSwiper('.eventsSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 40 },
      1024: { slidesPerView: 3, spaceBetween: 40 },
    },
    navigation: {
      nextEl: '.eventsSwiper .swiper-button-next',
      prevEl: '.eventsSwiper .swiper-button-prev',
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  initializeSwiper('.writerSwiper', {
    slidesPerView: 1,
    spaceBetween: 70,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: { enabled: true },
    breakpoints: {
      640: { slidesPerView: 2, slidesPerGroup: 1 },
      768: { slidesPerView: 2, slidesPerGroup: 1 },
      1024: { slidesPerView: 3, slidesPerGroup: 1 },
      1200: { slidesPerView: 4, slidesPerGroup: 1 },
    },
    navigation: {
      nextEl: '.writerSwiper .swiper-button-next',
      prevEl: '.writerSwiper .swiper-button-prev',
    },
    scrollbar: {
      el: '.writerSwiper .swiper-scrollbar',
    },
  });

  initializeSwiper('.collectionSwiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: false,
    breakpoints: {
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 5 },
    },
    navigation: {
      nextEl: '.collectionSwiper .swiper-button-next',
      prevEl: '.collectionSwiper .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  initializeSwiper('.cpSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 5 },
    },
    navigation: {
      nextEl: '.cpSwiper .swiper-button-next',
      prevEl: '.cpSwiper .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  initializeSwiper('.spSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 5 },
    },
    navigation: {
      nextEl: '.spSwiper .swiper-button-next',
      prevEl: '.spSwiper .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  initializeSwiper('.bookSwiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 5 },
    },
    navigation: {
      nextEl: '.bookSwiper .swiper-button-next',
      prevEl: '.bookSwiper .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  initializeSwiper('.chrSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    allowTouchMove: false,
    navigation: {
      nextEl: '.chrSwiper .swiper-button-next',
      prevEl: '.chrSwiper .swiper-button-prev',
    },
  });

  initializeSwiper('.workSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.workSwiper .swiper-button-next',
      prevEl: '.workSwiper .swiper-button-prev',
    },
  });

  // --- Thumbs Galleries ---
  const storySwiperThumbs = initializeSwiper('.storySwiper', {
    spaceBetween: 10,
    slidesPerView: 7.5,
    freeMode: true,
    watchSlidesProgress: true,
  });

  initializeSwiper('.storySwiper2', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.storySwiper2 .swiper-button-next',
      prevEl: '.storySwiper2 .swiper-button-prev',
    },
    thumbs: { swiper: storySwiperThumbs },
  });

  const sbookSwiperThumbs = initializeSwiper('.sbookSwiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.sbookSwiper .swiper-button-next',
      prevEl: '.sbookSwiper .swiper-button-prev',
    },
  });

  initializeSwiper('.sbookSwiper2', {
    spaceBetween: 10,
    thumbs: { swiper: sbookSwiperThumbs },
  });

  // --- password_toggle ---
  var passShow = false;
  $('.password_toggle .btn-icon').on('click', function (e) {
    e.preventDefault();
    const $input = $(this).closest('.password_toggle').find('input');
    const $icon = $(this).children('i');

    if ($input.attr('type') === 'password') {
      $input.attr('type', 'text');
      $icon.removeClass('i_hide').addClass('i_show');
    } else {
      $input.attr('type', 'password');
      $icon.removeClass('i_show').addClass('i_hide');
    }
  });
});
// $(function () {
//   // 首頁輪播
//   let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
//   let mpSliderPagination = [];
//   mpSliderItem.forEach((item, index) => {
//     mpSliderPagination.push(item.dataset.title);
//   });
//   var swiper = new Swiper('.mpSlider', {
//     slidesPerView: 1,
//     // spaceBetween: 30,
//     // centeredSlides: true,
//     loop: true,
//     speed: 1000,

//     autoplay: {
//       delay: 8000,
//       disableOnInteraction: false,
//     },
//     effect: 'fade',
//     fadeEffect: {
//       crossFade: true,
//     },
//     // keyboard: {
//     //   enabled: true,
//     // },
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'fraction',
//       // clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

//   //展覽與活動
//   var swiper = new Swiper('.eventsSwiper', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: false,
//     // pagination: {
//     //   el: '.swiper-pagination',
//     //   clickable: true,
//     // },
//     breakpoints: {
//       640: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 40,
//       },
//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 40,
//       },
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     autoplay: {
//       delay: 8000,
//       disableOnInteraction: false,
//     },
//   });

//   //桃園作家
//   var swiper = new Swiper('.writerSwiper', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     centeredSlides: false,
//     slidesPerGroupSkip: 1,
//     grabCursor: true,
//     keyboard: {
//       enabled: true,
//     },
//     // pagination: {
//     //   el: '.swiper-pagination',
//     //   clickable: true,
//     // },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         slidesPerGroup: 1,
//         spaceBetween: 70,
//       },
//       640: {
//         slidesPerView: 2,
//         slidesPerGroup: 1,
//         spaceBetween: 70,
//       },
//       768: {
//         slidesPerView: 2,
//         slidesPerGroup: 1,
//         spaceBetween: 70,
//       },
//       1024: {
//         slidesPerView: 3,
//         slidesPerGroup: 1,
//         spaceBetween: 70,
//       },
//       1200: {
//         slidesPerView: 4,
//         slidesPerGroup: 1,
//         spaceBetween: 70,
//       },
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

//   //作品文物典藏
//   var swiper = new Swiper('.collectionSwiper', {
//     slidesPerView: 2,
//     spaceBetween: 20,
//     loop: false,
//     // pagination: {
//     //   el: '.swiper-pagination',
//     //   clickable: true,
//     // },

//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//       },
//       1024: {
//         slidesPerView: 5,
//         spaceBetween: 20,
//       },
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//   });

//   //cp燈箱輪播
//   var swiper = new Swiper('.cpSwiper', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: false,
//     // pagination: {
//     //   el: '.swiper-pagination',
//     //   clickable: true,
//     // },

//     breakpoints: {
//       640: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       1024: {
//         slidesPerView: 5,
//         spaceBetween: 20,
//       },
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//   });

//   //sp燈箱輪播
//   var swiper = new Swiper('.spSwiper', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: false,
//     // pagination: {
//     //   el: '.swiper-pagination',
//     //   clickable: true,
//     // },

//     breakpoints: {
//       640: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       1024: {
//         slidesPerView: 5,
//         spaceBetween: 20,
//       },
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//   });

//   //著作資源
//   var swiper = new Swiper('.bookSwiper', {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     loop: false,
//     // pagination: {
//     //   el: '.swiper-pagination',
//     //   clickable: true,
//     // },

//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//       },
//       1024: {
//         slidesPerView: 5,
//         spaceBetween: 20,
//       },
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//   });

//   //寫作年表
//   var swiper = new Swiper('.chrSwiper', {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: false,
//     allowTouchMove: false, // 禁止滑鼠/手指拖曳
//     simulateTouch: false, // 禁止模擬觸控
//     // pagination: {
//     //   el: '.swiper-pagination',
//     //   clickable: true,
//     // },

//     breakpoints: {
//       640: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       1024: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

//   //寫作年表
//   var swiper = new Swiper('.workSwiper', {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: false,
//     // pagination: {
//     //   el: '.swiper-pagination',
//     //   clickable: true,
//     // },

//     breakpoints: {
//       640: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       1024: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

//   //照片故事
//   var swiper = new Swiper('.storySwiper', {
//     spaceBetween: 10,
//     slidesPerView: 7.5,
//     freeMode: true,
//     watchSlidesProgress: true,
//   });
//   var swiper2 = new Swiper('.storySwiper2', {
//     spaceBetween: 10,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     thumbs: {
//       swiper: swiper,
//     },
//   });

//   //作品介紹
//   var swiper = new Swiper('.sbookSwiper', {
//     spaceBetween: 10,
//     slidesPerView: 3,
//     freeMode: true,
//     watchSlidesProgress: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
//   var swiper2 = new Swiper('.sbookSwiper2', {
//     spaceBetween: 10,
//     // navigation: {
//     //   nextEl: '.swiper-button-next',
//     //   prevEl: '.swiper-button-prev',
//     // },
//     thumbs: {
//       swiper: swiper,
//     },
//   });

//   // password_toggle
//   var passShow = false;
//   $('.password_toggle').each(function (index, el) {
//     $(this)
//       .find('.btn-icon')
//       .off()
//       .click(function (e) {
//         if (!passShow) {
//           $(this).children('i').removeClass().addClass('i_show');
//           $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
//           passShow = true;
//           // console.log(passShow);
//         } else {
//           $(this).children('i').removeClass().addClass('i_hide');
//           $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
//           passShow = false;
//           // console.log(passShow);
//         }
//         e.preventDefault();
//       });
//   });
//   //sticky sidebar
//   // if ($('.stickySidebar').length > 0) {
//   //   var stickySidebar = new StickySidebar('.stickySidebar', {
//   //     containerSelector: '.main',
//   //     topSpacing: 93,
//   //     bottomSpacing: 0,
//   //     minWidth: 768,
//   //     resizeSensor: true,
//   //   });
//   // }
// });

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
// if ($('.adv_search').length > 0) {
//   $('.adv_search').show();
//   $('.adv_search').addClass('open');
//   $('.adv_search .hide_btn').click(function () {
//     $('.adv_search').removeClass('open');
//     $(this).hide();
//     $('.adv_search .show_btn').show();
//   });
//   $('.show_btn')
//     .off()
//     .click(function (e) {
//       $('.adv_search').stop().slideToggle(400, 'easeOutCubic');
//       e.preventDefault();
//     });
// }
$(document).ready(function () {
  const $advSearch = $('.adv_search');
  const $showBtn = $('.show_btn');
  const $hideBtn = $('.hide_btn');

  // 預設展開狀態
  $advSearch.addClass('open').show();
  $showBtn.hide();
  $hideBtn.show();

  // 收合按鈕點擊
  $hideBtn.on('click', function (e) {
    e.preventDefault();
    $advSearch.removeClass('open').addClass('closed').slideUp(300, 'easeOutCubic');
    $hideBtn.hide(); // 立即隱藏
    $showBtn.show(); // 立即顯示
  });

  // 展開按鈕點擊
  $showBtn.on('click', function (e) {
    e.preventDefault();
    $showBtn.hide(); // 立即隱藏
    $hideBtn.show(); // 立即顯示
    $advSearch.removeClass('closed').addClass('open').slideDown(300, 'easeOutCubic');
  });
});
