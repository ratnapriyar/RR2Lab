(function () {
  var sectionHeading = document.querySelector('.research-section-heading');
  var accordion = document.getElementById('researchAccordion');
  var items = Array.from(accordion.querySelectorAll(':scope > .accordion-item'));
  var topicLinks = document.querySelectorAll('.research-topics a[href^="#"]');
  var activeHash;

  function displayTopic(hash) {
    var matchedLink = Array.from(topicLinks).find(function (link) {
      return link.hash === hash;
    });
    var selectedLink = matchedLink || topicLinks[0];

    if (!selectedLink) {
      return;
    }

    var selectedHash = selectedLink.hash;
    var heading = document.getElementById(selectedHash.slice(1));
    var selectedItem = heading && heading.closest('.accordion-item');

    if (!selectedItem || !accordion.contains(selectedItem)) {
      return;
    }

    activeHash = selectedHash;
    sectionHeading.hidden = false;
    accordion.hidden = false;
    topicLinks.forEach(function (link) {
      if (link === selectedLink) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
      link.setAttribute('aria-expanded', String(link === selectedLink));
      link.setAttribute('aria-controls', 'researchAccordion');
    });
    items.forEach(function (item) {
      item.hidden = item !== selectedItem;
    });

    var toggle = heading.querySelector('[data-bs-toggle="collapse"]');
    var target = toggle && toggle.getAttribute('data-bs-target');
    var panel = target && document.querySelector(target);
    if (panel && window.bootstrap && window.bootstrap.Collapse) {
      window.bootstrap.Collapse.getOrCreateInstance(panel, { toggle: false }).show();
    }

    if (matchedLink) {
      window.requestAnimationFrame(function () {
        heading.scrollIntoView({ block: 'start' });
      });
    }
  }

  function closeTopic() {
    accordion.hidden = true;
    topicLinks.forEach(function (link) {
      link.setAttribute('aria-expanded', 'false');
    });
  }

  topicLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      if (link.hash === activeHash && !accordion.hidden) {
        closeTopic();
        return;
      }

      if (window.location.hash !== link.hash) {
        window.history.pushState(null, '', link.hash);
      }
      displayTopic(link.hash);
    });
  });

  window.addEventListener('hashchange', function () {
    displayTopic(window.location.hash);
  });

  displayTopic(window.location.hash);
})();
