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
