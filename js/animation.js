document.addEventListener("DOMContentLoaded", function() {
  AOS.init();
  var section = document.querySelector(".menu");
  var info = document.querySelector(".bottom-hero-section");
  var section1 = document.querySelector(".first-top-child-first-central-hero-section");
  var section2 = document.querySelector(".second-top-child-first-central-hero-section");
  var section3 = document.querySelector(".products-container");
  var section4 = document.querySelector(".products-number");
  section.classList.add("expanded-height");
  // info.classList.add("expanded-width" ,"block");
  section1.classList.add("expanded-height");
  section2.classList.add("expanded-height");
  section3.classList.add("expanded-height");
 section4.classList.add("expanded-height");
});