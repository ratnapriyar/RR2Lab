(function () {
  var modalElement = document.getElementById('newsImageModal');
  var modalImage = document.getElementById('newsImageModalPhoto');
  var modalTitle = document.getElementById('newsImageModalTitle');

  if (!modalElement || !modalImage || !modalTitle || !window.bootstrap) {
    return;
  }

  var imageModal = new window.bootstrap.Modal(modalElement);
  var images = document.querySelectorAll('.news-image');
  var coverImageLink = document.getElementById('genomeResearchCoverLink');

  if (coverImageLink) {
    coverImageLink.addEventListener('click', function (event) {
      var openedWindow = window.open(coverImageLink.href, '_blank');

      if (openedWindow) {
        event.preventDefault();
        openedWindow.opener = null;
        openedWindow.focus();
      }
    }, true);
  }

  function showImage(image) {
    modalImage.src = image.currentSrc || image.src;
    modalImage.alt = image.alt;
    modalTitle.textContent = image.alt || 'News photo';
    imageModal.show();
  }

  images.forEach(function (image) {
    if (image.closest('a[href]')) {
      return;
    }

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
