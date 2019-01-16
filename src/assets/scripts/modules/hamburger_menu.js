'use string';

const hamburger_menu = (hamburger, overlay) => {
  hamburger.onclick = function (e) {
    e.preventDefault();

    this.classList.toggle('on');
    overlay.classList.toggle('open');
  };
};

export default hamburger_menu;
