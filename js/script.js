(function(){

  "use strict";

  // this is so the links stay with inside of our web app.
  // var iWebkit;
  // if (!iWebkit) {
  //     iWebkit = window.onload = function () {
  //         function fullscreen() {
  //             var a = document.getElementsByTagName("a");
  //             for (var i = 0; i < a.length; i++) {
  //                 if (a[i].className.match("noeffect")) {} else {
  //                     a[i].onclick = function () {
  //                         window.location = this.getAttribute("href");
  //                         return false
  //                     }
  //                 }
  //             }
  //         }
  //         function hideURLbar() {
  //             window.scrollTo(0, 0.9)
  //         }
  //         iWebkit.init = function () {
  //             fullscreen();
  //             hideURLbar()
  //         };
  //         iWebkit.init()
  //     }
  // }

//
// What we need to happen
//
// 1. Check to see if browser is iOS mobile webkit
// 2. If Yes then show redirect to mobile.html
// 3. Check to see if user is has downloaded the webapp
// 4. if not show them the installer screen
//


// This little bit is detracting if it is on index then checking to see if it is iphone, if so show mobile.
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



//
// Side Menu
//
$(document).ready(function(){
  var pagebody = $("#page");
  var themenu = $("nav");
  var topbar  = $("header");
  var content = $("#main");
  var viewport = {
      width  : $(window).width(),
      height : $(window).height()
  };
  // retrieve variables as
  // viewport.width / viewport.height

  function openme() {
    $(function () {
        topbar.animate({
           left: "255px"
        }, { duration: 300, queue: false });
        pagebody.animate({
           left: "255px"
        }, { duration: 300, queue: false });
    });
  }

  function closeme() {
    var closeme = $(function() {
        topbar.animate({
              left: "0px"
        }, { duration: 180, queue: false });
        pagebody.animate({
              left: "0px"
        }, { duration: 180, queue: false });
    });
  }

  // checking whether to open or close nav menu
  $("#menu-btn").on("click", function(e){
    e.preventDefault();
    var leftval = pagebody.css('left');

    if(leftval == "0px") {
      openme();
    }
    else {
      closeme();
    }
  });

  // loading page content for navigation
  $("a.navlink").on("click", function(e){
    e.preventDefault();
    var linkurl     = $(this).attr("href");
    var linkhtmlurl = linkurl.substring(1, linkurl.length);

    var imgloader   = '<center style="margin-top: 30px;"><img src="img/preloader.gif" alt="loading..." /></center>';

    closeme();

    $(function() {
      topbar.css("top", "0px");
      window.scrollTo(0, 1);
    });

    content.html(imgloader);

    setTimeout(function() { content.load(linkhtmlurl, function() { /* no callback */ }) }, 1200);
  });
});

