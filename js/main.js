/* ── Nav scroll behaviour ── */
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  var isTransparent = nav.classList.contains('nav--transparent');
  if (!isTransparent) return;

  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.remove('nav--transparent');
      nav.classList.add('nav--solid');
    } else {
      nav.classList.remove('nav--solid');
      nav.classList.add('nav--transparent');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();


/* ── Split hero animation ── */
document.addEventListener('DOMContentLoaded', function () {
  var panels = document.querySelectorAll('.hero__panel');
  var contents = document.querySelectorAll('.hero__content');

  if (!panels.length) return;

  // Small delay so the browser paints the initial state
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      panels.forEach(function (panel) {
        panel.classList.add('animate-in');
      });

      contents.forEach(function (content) {
        content.classList.add('stagger');
      });

      // Remove will-change after animation
      setTimeout(function () {
        panels.forEach(function (panel) {
          panel.classList.add('animation-done');
        });
      }, 1200);
    });
  });
});


/* ── Mobile nav ── */
(function () {
  var hamburger = document.querySelector('.nav__hamburger');
  var overlay = document.querySelector('.nav__overlay');
  var close = document.querySelector('.nav__close');

  if (!hamburger || !overlay) return;

  hamburger.addEventListener('click', function () {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });

  function closeOverlay() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (close) close.addEventListener('click', closeOverlay);

  overlay.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeOverlay);
  });
})();


/* ── Contact form ── */
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.querySelector('[name="name"]');
    var email = form.querySelector('[name="email"]');
    var message = form.querySelector('[name="message"]');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      return;
    }

    if (!emailPattern.test(email.value.trim())) {
      return;
    }

    form.innerHTML = '<p class="contact__thanks">Thank you. We\u2019ll be in touch within 48 hours.</p>';
  });
})();
