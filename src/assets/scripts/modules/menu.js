import hamburger_menu from './hamburger_menu';

document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.js-overlay-menu');

  hamburger_menu(hamburger, overlay);

});
