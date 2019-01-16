import flip from './modules/flip'

document.addEventListener('DOMContentLoaded', () => {

  let flipbtn = document.querySelector('.btn-auth'),
  flipbtnMain = document.querySelector('.js-user-links__link'),
  flipCart = document.querySelector('.hero__cart');

  flip(flipbtn, flipbtnMain, flipCart);

});
