function initSwiperProducts() {
  var swiper = new Swiper('.swiper-products-auto-width', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
  })
}

initSwiperProducts()

// -----
function initProductVariantImg() {
  jQuery(document).ready(function ($) {
    $('.pm-variant_attr').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active')
      $(this)
        .closest('.pm-variants')
        .find('.pm-variant_thumb')
        .attr('src', $(this).data('img-src'))
    })
  })
}

initProductVariantImg()

// -----
function initSwiperProductAsscessories() {
  var swiper = new Swiper('.pm-swiper-accessories', {
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  })
}

initSwiperProductAsscessories()
