(function() {
  function setCookie(name, value, options) {
    var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (var optionKey in options) {
      updatedCookie += "; " + optionKey;
      var optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
  }

  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    callback_loaded: function(el) {
      // if (el.classList.contains('page-preloader-img')) {
      //   setTimeout(function() {
      //     el.parentNode.style.opacity = 0
      //     document.querySelector('.page').classList.add('is-loaded')
      //
      //     if (getCookie('preloaderShown') === '') {
      //       var date = new Date();
      //       date.setDate(date.getDate() + 1);
      //       date = date.toUTCString();
      //       setCookie('preloaderShown', 'true', {'expires': date})
      //     }
      //
      //     setTimeout(function() {
      //       el.parentNode.style.display = 'none'
      //     }, 1000)
      //   }, 2000)
      // }
		}
  })

  var menuTrigger = document.querySelector('[data-menu-open]')
  var menuTriggerClose = document.querySelector('[data-menu-close]')
  var menu = document.querySelector('[data-menu]')
  var menuCintainer = document.querySelector('.header-menu-container')
  var cookieBanner = document.querySelector('[data-cookie-banner]')
  var cookieBtns = [].slice.call(document.querySelectorAll('[data-cookie-btn]'))
  var pageContainer = document.querySelector('.page-container')

  menuTrigger.addEventListener('click', function() {
    menu.style.visibility = 'visible'
    pageContainer.style.filter = 'blur(6px)'
    menu.classList.add('is-open')
  })

  menuTriggerClose.addEventListener('click', function() {
    menu.classList.remove('is-open')
    pageContainer.style.filter = ''
    setTimeout(function() {
      menu.style.visibility = 'hidden'
    }, 400)
  })

  document.addEventListener('click', function(ev) {
    if (ev.target.contains(menuCintainer)) {
      menu.classList.remove('is-open')
      pageContainer.style.filter = ''
      setTimeout(function() {
        menu.style.visibility = 'hidden'
      }, 400)
    }
  })

  cookieBtns.forEach(function(cookieBtn) {
    var type = cookieBtn.dataset.cookieBtn

    cookieBtn.addEventListener('click', function() {
      if (type === 'accept') {
        var date = new Date();
        date.setDate(date.getDate() + 7);
        date = date.toUTCString();

        setCookie('accepted', 'true', {'expires': date})
      } else if (type === 'decline') {
        console.log('decline')
      }

      if (getCookie('accepted') === 'true') {
        cookieBanner.classList.add('is-hidden')
        setTimeout(function() {
          cookieBanner.style.display = 'none'
        }, 400)
      }
    })
  })
})();
