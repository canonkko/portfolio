'use string';

const flip = (flipbtn, flipbtnMain, flipCart) => {
  document.body.onclick = (e) => {
    if (!e.target.closest('.hero__cart') || e.target === flipbtnMain) {
      if (!flipCart.classList.contains('flipped') && e.target !== flipbtn) {
        return false;
      }
      flipCart.classList.toggle('flipped');
      flipbtn.classList.toggle('hidden');
    }
  };
};

export default flip;
