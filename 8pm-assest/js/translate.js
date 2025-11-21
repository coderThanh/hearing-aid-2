const listLange = [
  {
    lang: 'en',
    name: 'English',
    flag: '/8pm-assest/images/translate/uk.svg',
  },
  {
    lang: 'vi',
    name: 'Tiếng Việt',
    flag: '/8pm-assest/images/translate/vn.svg',
  },
]

function translatePage(lang, hidePopup = false, isInit = false) {
  if (hidePopup) {
    pmPopupTranslateHide()
  }

  const select = document.querySelector('select.goog-te-combo')
  if (!select) {
    return
  }

  select.value = lang
  select.dispatchEvent(new Event('change'))
  localStorage.setItem('lang', lang)

  const langeConfig = listLange.find((item) => item.lang === lang)
  if (!langeConfig) return

  document.querySelector('.pm-btn-translate_text').textContent =
    langeConfig.lang
  document.querySelector('.pm-btn-translate_img').src = langeConfig.flag
}

// translate page on load
window.onload = () => {
  const saved = localStorage.getItem('lang')
  if (saved) translatePage(saved, false, true)
}

// hide google translate ui
;(function hideGoogleTranslateUI() {
  const css = `
    .skiptranslate { display: none !important; }
    #goog-gt-tt { display: none !important; }
    body { top: 0 !important; }
    .goog-tooltip { display: none !important; }
    .goog-te-balloon-frame { display: none !important; }
    .goog-logo-link { display: none !important; }
    .goog-te-gadget { display: none !important; }
    .goog-te-combo { display: none !important; }
  `

  const style = document.createElement('style')
  style.innerHTML = css
  document.head.appendChild(style)

  // Chặn Google cố chèn banner
  setInterval(() => {
    const frame = document.querySelector('.goog-te-banner-frame')
    if (frame) frame.style.display = 'none'
    document.body.style.top = '0px'
  }, 0)
})()

// add option translate to popup
function addOptionTranslateToPopup() {
  const popupContent = document.querySelector(
    '#popup_translate .pm-popup_content-inner',
  )
  if (!popupContent) return

  listLange.forEach((item) => {
    const option = document.createElement('div')
    option.classList.add('pm-popup-translate_item')
    option.innerHTML = `
       <div onclick="translatePage('${item.lang}', true)" class="pm-popup-translate_item-content">
            <img src="${item.flag}" alt="${item.name}" class="pm-popup-translate_flag" />
            <span class="pm-popup-translate_name">${item.name}</span>
       </div>
        `
    popupContent.appendChild(option)
  })
}
addOptionTranslateToPopup()

//
function pmPopupTranslateHide() {
  document.querySelector('#popup_translate').classList.remove('active')
}

//
function pmPopupTranslateShow() {
  document.querySelector('#popup_translate').classList.add('active')
}
