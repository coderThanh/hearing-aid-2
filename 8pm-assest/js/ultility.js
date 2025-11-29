/** Handle Content view more  -------- */
function handleContentViewMore() {
  jQuery(document).ready(function ($) {
    $('.box-content-loadmore').each(function (indexInArray, parentEL) {
      var wrap = $(parentEL)
      let maxHeight = $(parentEL).data('content-height')
      var current_height = wrap.height()

      if (current_height > maxHeight) {
        wrap.css('height', maxHeight + 'px')
        wrap.addClass('box-content-loadmore')
        wrap.append(function () {
          return '<div class="el-actions"><button href="#" class="btn-default btn-loadmore">Xem thêm</button></div>'
        })

        $('body').on('click', '.el-actions .btn-loadmore', function () {
          $(this).closest('.box-content-loadmore').removeAttr('style')
          $(this).closest('.el-actions').remove()
        })
      }
    })
  })
}

handleContentViewMore()



/**
 * Make box child euqal
 */

jQuery(document).ready(function ($) {
  // run init
  // setTimeout(setEqualForBox, 0)
  setEqualForBox()

  // run when change windown width
  window.addEventListener('resize', function (event) {
    setEqualForBox()
  })
})


function setEqualForBox() {
  jQuery(document).ready(function ($) {
    $('.make-box-equal').each(async function (indexInArray, makeElement) {
      var maxHeight = 0
      var listChild = $(makeElement).find('.box')

      if (listChild.length > 0) {
        for (let index = 0; index < listChild.length; ++index) {
          $(listChild[index]).css('height', '')
        }

        for (let index = 0; index < listChild.length; ++index) {
          if (maxHeight <= $(listChild[index]).outerHeight()) {
            maxHeight = $(listChild[index]).outerHeight()
          }
        }

        for (let index = 0; index < listChild.length; ++index) {
          $(listChild[index]).outerHeight(maxHeight)
        }
      }
    })
  })
}

// ------
/** Handle Content view more  -------- */
function initStickyHeader() {
  jQuery(document).ready(function ($) {
    $('.main-header').each(function (indexInArray, parentEL) {
      const setHeightHeader = function () {
        const heightHeader = $(parentEL).height()
        $(parentEL).height(heightHeader)
      }

      setHeightHeader()

      // Handle sticky header
      window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY
        if (scrollTop > 0) {
          $(parentEL).addClass('is-sticky-header')
        } else {
          $(parentEL).removeClass('is-sticky-header')
        }
      })

      window.addEventListener('resize', setHeightHeader)
    })
  })
}

initStickyHeader()

//
function initSwiperDefault() {
  jQuery(document).ready(function ($) {
    $('.swiper-default').each(function (indexInArray, swiperEletment) {
      // get config
      let sliderPerViewSm = Number.isNaN(
        Number($(this).data('slider-per-view')),
      )
        ? 1
        : Number($(this).data('slider-per-view'))

      let sliderPerViewMd = Number.isNaN(
        Number($(this).data('slider-per-view-md')),
      )
        ? 1
        : Number($(this).data('slider-per-view-md'))

      let sliderPerViewLg = Number.isNaN(
        Number($(this).data('slider-per-view-lg')),
      )
        ? 1
        : Number($(this).data('slider-per-view-lg'))

      let autoPlay = Number.isNaN(Number($(this).data('auto-play')))
        ? null
        : Number($(this).data('auto-play'))
      let spaceBetween = Number.isNaN(Number($(this).data('space-between')))
        ? null
        : Number($(this).data('space-between'))
      let loop = Boolean($(this).data('loop'))

      console.log(swiperEletment)

      if (!swiperEletment) return

      // init swiper default
      new Swiper(swiperEletment, {
        spaceBetween: spaceBetween,
        loop: loop,
        autoPlay: autoPlay
          ? { delay: autoPlay, pauseOnMouseEnter: true }
          : null,
        breakpoints: {
          0: {
            slidesPerView: sliderPerViewSm,
          },
          650: {
            slidesPerView: sliderPerViewMd ?? sliderPerViewSm,
          },
          992: {
            slidesPerView:
              sliderPerViewLg ?? sliderPerViewMd ?? sliderPerViewSm,
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    })
  })
}
initSwiperDefault()
