(function() {
  var images = [].slice.call(document.querySelectorAll('[data-gallery-group]'))

  images.forEach(function(image) {
    var id = image.dataset.galleryGroup
    var neighbors = [].slice.call(document.querySelectorAll('[data-gallery-group="' + id + '"]'))

    image.addEventListener('mouseenter', function() {
      image.classList.add('hovered')
      neighbors.forEach(function(neighbor) {
        neighbor.classList.add('hovered')
      })
    })

    image.addEventListener('mouseleave', function() {
      image.classList.remove('hovered')
      neighbors.forEach(function(neighbor) {
        neighbor.classList.remove('hovered')
      })
    })
  })
})();
