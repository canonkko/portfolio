document.addEventListener("DOMContentLoaded", function() {

  const arrows = document.querySelectorAll('.arrow-down');
  const anchor = document.getElementById('anchor');

  for (var arrow of arrows) {
    arrow.onclick = function(e) {
      e.preventDefault();
      anchor.scrollIntoView({
        behavior: "smooth"
      });
    }
  }


});
