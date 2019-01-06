document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.querySelector('.hamburger');
  hamburger.onclick = function (e) {
    e.preventDefault();
    this.classList.toggle('on');
  };

});