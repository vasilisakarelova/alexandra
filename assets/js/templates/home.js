(function() {
  var cases = [].slice.call(document.querySelectorAll('.case-wrapper'))
  var mainImgs = [].slice.call(document.querySelectorAll('.case-wrapper-img'))
  var mainGalleries = [].slice.call(document.querySelectorAll('.case-gallery'))
  var projectTitle = document.querySelector('[data-project-title]')
  var prevIdx

  cases.forEach(function(gallery, idx) {
    var mainImg = mainImgs[idx]
    var mainGallery = mainGalleries[idx]
    var mainGalleryImgs = [].slice.call(mainGallery.children)
    var currentGallery = mainGalleryImgs.concat(mainImg)
    var currentActive = currentGallery.length - 1

    mainImg.addEventListener('load', function() {
      if ((gallery.getBoundingClientRect().left + mainImg.getBoundingClientRect().width) >= window.innerWidth) {
        var right = window.innerWidth - (gallery.getBoundingClientRect().left + gallery.getBoundingClientRect().width)
        mainImg.style.right = right + 'px'

        mainGalleryImgs.forEach(function(mainGalleryImg) {
          mainGalleryImg.style.right = right + 'px'
        })
      } else {
        mainImg.style.left = gallery.getBoundingClientRect().left + 'px'

        mainGalleryImgs.forEach(function(mainGalleryImg) {
          mainGalleryImg.style.left = gallery.getBoundingClientRect().left + 'px'
        })
      }
    })

    gallery.addEventListener('mouseenter', function(ev) {
      mainImg.style.opacity = 1
      gallery.style.overflow = 'visible'
      projectTitle.innerHTML = gallery.dataset['title']

      if (typeof(prevIdx) !== 'undefined' && prevIdx !== idx) {
        var prevMainImg = mainImgs[prevIdx]
        var prevGallery = mainGalleries[prevIdx]
        var prevGalleryImgs = [].slice.call(prevGallery.children)
        var prevCurrentGallery = prevGalleryImgs.concat(prevMainImg)

        prevCurrentGallery.forEach(function(prevCurrentGalleryImg) {
          prevCurrentGalleryImg.style.opacity = 0
        })
      }

      mainImgs.forEach(function(image, imageIdx) {
        if (imageIdx !== idx) {
          image.style.opacity = 0
          cases[imageIdx].style.overflow = 'hidden'
        }
      })
    })

    gallery.addEventListener('mouseleave', function() {
      prevIdx = idx
    })

    gallery.addEventListener('click', function() {
      if (window.innerWidth > 984) {
        currentGallery[currentActive].style.opacity = 0
        currentActive++

        if (currentActive > (currentGallery.length - 1)) currentActive = 0
        currentGallery[currentActive].style.opacity = 1
      }

    })
  })
})();
