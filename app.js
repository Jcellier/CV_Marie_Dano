/*const allLis = document.querySelectorAll("li");
const allRond = document.querySelectorAll("svg");

const controller = new ScrollMagic.Controller()

allLis.forEach(li => {
    for(let i=0; i < allLis.length; i++) {
        if(allLis[i].getAttribute("anim")) {
            let tween = gsap.from(li, {y: -50, opacity: 0, duration: 0.5})
            let scene = new ScrollMagic.Scene({
                triggerElement: allLis[i],
                reverse: false
            })
            .setTween(tween)
            .addIndicators()
            .addTo(controller)
        }
    }
})*/

(function() {

    'use strict';
  
    // define variables
    var items = document.querySelectorAll("li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();