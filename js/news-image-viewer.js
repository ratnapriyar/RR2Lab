(function () {
  var modalElement = document.getElementById('newsImageModal');
  var modalImage = document.getElementById('newsImageModalPhoto');
  var modalTitle = document.getElementById('newsImageModalTitle');

  if (!modalElement || !modalImage || !modalTitle || !window.bootstrap) {
    return;
  }

  var imageModal = new window.bootstrap.Modal(modalElement);
  var images = document.querySelectorAll('.news-image');

  function showImage(image) {
    modalImage.src = image.currentSrc || image.src;
    modalImage.alt = image.alt;
    modalTitle.textContent = image.alt || 'News photo';
    imageModal.show();
  }

  images.forEach(function (image) {
    image.addEventListener('click', function () {
      showImage(image);
    });

    image.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showImage(image);
      }
    });
  });

  modalElement.addEventListener('hidden.bs.modal', function () {
    modalImage.removeAttribute('src');
    modalImage.alt = '';
  });
})();
