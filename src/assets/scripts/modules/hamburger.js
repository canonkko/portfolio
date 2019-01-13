document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.js-overlay-menu');
  hamburger.onclick = function (e) {
    e.preventDefault();

    this.classList.toggle('on');
    overlay.classList.toggle('open');
  };

});