document.addEventListener('DOMContentLoaded', function () {

  const flipbtn = document.querySelector('.btn-auth');
  const flipbtnMain = document.querySelector('.js-user-links__link');
  const flipCart = document.querySelector('.hero__cart');

  // flipbtn.onclick = function (e) {
  //   e.preventDefault();
  //   if (flipCart.classList.contains('flipped')) {
  //     flipCart.classList.remove('flipped');
  //     this.innerHTML = 'Авторизоваться'; 
  //   } else {
  //     flipCart.classList.add('flipped');
  //     this.innerHTML = 'На главную';
  //   }
  // }

  // flipbtnMain.onclick = function (e) {
  //   e.preventDefault();
  //   flipCart.classList.remove('flipped');
  //   flipbtn.innerHTML = 'Авторизоваться';
  // }

  document.body.onclick = (e) => {
    
    // e.preventDefault();
    if (!e.target.closest('.hero__cart')) {
      // console.log("fgf");
      if (!flipCart.classList.contains('flipped') && e.target !== flipbtnMain) {
        return false;
        flipCart.classList.toggle('flipped');
        flipbtn.innerHTML = 'Авторизоваться';
      }
    }
  }

});
