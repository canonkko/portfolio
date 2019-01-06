document.addEventListener("DOMContentLoaded", function () {

  const arrows = document.querySelectorAll('.arrow-down');
  const anchor = document.getElementById('anchor');
  for (var i = 0, arrow; arrow = arrows[i]; i++) {
    arrow.onclick = function (e) {
      e.preventDefault();
      anchor.scrollIntoView({ behavior: "smooth" });
    } 
  }



});