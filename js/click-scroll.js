(function () {
  var links = document.querySelectorAll('.navbar-nav .nav-link[href^="#section_"]');

  if (!links.length) {
    return;
  }

  function updateActiveLink() {
    var activeLink = links[0];

    for (var i = 0; i < links.length; i += 1) {
      var sectionId = links[i].getAttribute('href').slice(1);
      var section = document.getElementById(sectionId);

      if (section && section.getBoundingClientRect().top <= 100) {
        activeLink = links[i];
      }
    }

    for (var j = 0; j < links.length; j += 1) {
      links[j].classList.toggle('active', links[j] === activeLink);
    }
  }

  window.addEventListener('scroll', updateActiveLink);
  window.addEventListener('resize', updateActiveLink);
  updateActiveLink();
})();
