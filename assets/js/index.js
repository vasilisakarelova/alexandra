(function() {
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  })

  var menuTrigger = document.querySelector('[data-menu-open]')
  var menu = document.querySelector('[data-menu]')

  menuTrigger.addEventListener('click', function() {
    menu.style.visibility = 'visible'
    menu.classList.add('is-open')
  })
})();
