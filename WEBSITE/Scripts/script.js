ver$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 25){
    $("header").addClass(".shrink");
  }
  else
  {
    $("header").removeClass(".shrink");
  }
});


/*function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 200,
  headerEl = document.getElementById('#header');

  if (distanceY > shrinkOn) {
    headerEl.classList.add("shrink");
  } else {
    headerEl.classList.remove("shrink");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);
*/

/*$(window).on("scroll touchmove", function () {
  $('#header_nav').toggleClass('shrink', $(document).scrollTop() > 0);
});*/
