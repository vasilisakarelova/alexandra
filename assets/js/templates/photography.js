(function() {
  var images = [].slice.call(document.querySelectorAll('[data-gallery-group]'))
  var projectTitle = document.querySelector('[data-project-title]')

  images.forEach(function(image) {
    var id = image.dataset.galleryGroup
    var title = image.dataset.galleryTitle
    var neighbors = [].slice.call(document.querySelectorAll('[data-gallery-group="' + id + '"]'))

    image.addEventListener('mouseenter', function() {
      projectTitle.innerHTML = title
    })
  })

  $('body').on('contextmenu', 'img', function(e){ return false; });

})();
