(function() {
  var cases = [].slice.call(document.querySelectorAll('.case-wrapper'))
  var mainImgs = [].slice.call(document.querySelectorAll('.case-wrapper-img'))
  var mainGalleries = [].slice.call(document.querySelectorAll('.case-gallery'))
  var projectTitle = document.querySelector('[data-project-title]')

  cases.forEach(function(gallery, idx) {
    var mainImg = mainImgs[idx]
    var mainGallery = mainGalleries[idx]
    var mainGalleryImgs = [].slice.call(mainGallery.children)
    var currentGallery = mainGalleryImgs.concat(mainImg)
    var currentActive = 0

    mainImg.addEventListener('load', function() {
      if ((gallery.getBoundingClientRect().left + mainImg.getBoundingClientRect().width) > window.innerWidth) {
        mainImg.style.right = 0
        mainImg.style.left = 'auto'

        mainGalleryImgs.forEach(function(mainGalleryImg) {
          mainGalleryImg.style.right = 0
          mainGalleryImg.style.left = 'auto'
        })
      }
    })

    gallery.addEventListener('mouseenter', function(ev) {
      mainImg.style.opacity = 1
      gallery.style.overflow = 'visible'
      projectTitle.innerHTML = gallery.dataset['title']

      mainImgs.forEach(function(image, imageIdx) {
        if (imageIdx !== idx) {
          image.style.opacity = 0
          cases[imageIdx].style.overflow = 'hidden'
        }
      })
    })

    gallery.addEventListener('mouseleave', function() {
      currentActive = 0
      gallery.style.overflow = 'hidden'
      mainImg.style.opacity = 0
      currentGallery.forEach(function(currentGalleryImg) {
        currentGalleryImg.style.opacity = 0
      })
    })

    gallery.addEventListener('mousewheel', function() {
      currentGallery[currentActive].style.opacity = 0
      currentActive++

      if (currentActive > (currentGallery.length - 1)) currentActive = 0
      currentGallery[currentActive].style.opacity = 1

    })
  })
})();
