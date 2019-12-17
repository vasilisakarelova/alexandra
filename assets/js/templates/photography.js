(function() {
  var images = [].slice.call(document.querySelectorAll('[data-gallery-group]'))
  var projectTitle = document.querySelector('[data-project-title]')

  images.forEach(function(image) {
    var id = image.dataset.galleryGroup
    var title = image.dataset.galleryTitle
    var neighbors = [].slice.call(document.querySelectorAll('[data-gallery-group="' + id + '"]'))

    image.addEventListener('mouseenter', function() {
      image.classList.add('hovered')
      projectTitle.innerHTML = title

      // images.forEach(function(otherImage) {
      //   if (neighbors.indexOf(otherImage) > -1) {
      //     otherImage.classList.add('hovered')
      //   } else {
      //     otherImage.classList.add('not-hovered')
      //   }
      // })
    })

    // image.addEventListener('mouseleave', function() {
    //   image.classList.remove('hovered')
    //   images.forEach(function(neighbor) {
    //     neighbor.classList.remove('hovered')
    //     neighbor.classList.remove('not-hovered')
    //   })
    // })
  })
})();
