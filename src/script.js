let navigation_bar = document.querySelector(".navbar");


document.getElementById("button-scroll").addEventListener('click', function() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });



  document.addEventListener("DOMContentLoaded", function() {
    var horizontal = document.getElementById('horizontal');
  
    window.addEventListener("scroll", function() {
      var s = window.scrollY,
        d = document.documentElement.scrollHeight,
        c = window.innerHeight;
  
      var scrollPercent = (s / (d - c));
  
      var position = scrollPercent * (document.documentElement.scrollWidth - horizontal.offsetWidth);
  
      horizontal.style.left = position + "px";
    });
  });



  