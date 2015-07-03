(function() {

  /**
  * Initialize smooth scroll
  */
  smoothScroll.init({
    speed: 1000,
    easing: 'easeInOutCubic',
    updateURL: false,
    offset: 0
  });

  /**
  * Allow user to change src of images in armor section
  */
  var mainImg = document.querySelector('.armor img');
  var thumbOne = document.querySelector('.thumb1');
  var thumbTwo = document.querySelector('.thumb2');
  var thumbThree = document.querySelector('.thumb3');
  var thumbFour = document.querySelector('.thumb4');
  
  /**
  * Event Handlers
  */

  var setAsMain = function() {
    mainImg.src = this.src;
  }

  thumbOne.addEventListener('click', setAsMain);
  thumbTwo.addEventListener('click', setAsMain);
  thumbThree.addEventListener('click', setAsMain);
  thumbFour.addEventListener('click', setAsMain);

  /**
  * Super ticked I brought in jQuery just for this.
  * Such a shame.
  */

  $('.menu-icon').click(function(e){
      e.preventDefault();
      $('.wrap-mobile-menu').slideToggle('slow');
    });

}());