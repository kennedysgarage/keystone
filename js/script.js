(function(){

  "use strict";

  // this is so the links stay with inside of our web app.
  var iWebkit;
  if (!iWebkit) {
      iWebkit = window.onload = function () {
          function fullscreen() {
              var a = document.getElementsByTagName("a");
              for (var i = 0; i < a.length; i++) {
                  if (a[i].className.match("noeffect")) {} else {
                      a[i].onclick = function () {
                          window.location = this.getAttribute("href");
                          return false
                      }
                  }
              }
          }
          function hideURLbar() {
              window.scrollTo(0, 0.9)
          }
          iWebkit.init = function () {
              fullscreen();
              hideURLbar()
          };
          iWebkit.init()
      }
  }

//
// What we need to happen
//
// 1. Check to see if browser is iOS mobile webkit
// 2. If Yes then show redirect to mobile.html
// 3. Check to see if user is has doenloaded the webapp
// 4. if not show them the installer screen
//


// This little bit is detacting if it is on index then checking to see if it is iphone, if so show mobile.
// We are missing the part about the installer screen.
if(document.URL.indexOf("index.html") >= 0){
  var isMobile = {
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad/i);
      }
  };
  if( isMobile.iOS() ) location.href = 'mobile.html';
}

}());
