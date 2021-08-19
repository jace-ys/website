(function ($) {
  "use strict";

  var $WIN = $(window);
  var doc = document.documentElement;
  doc.setAttribute("data-useragent", navigator.userAgent);

  var ssPreloader = function () {
    $("html").addClass("ss-preload");

    $WIN.on("load", function () {
      $("#loader").fadeOut("slow", function () {
        $("#preloader")
          .delay(300)
          .fadeOut("slow");
      });

      $("html").removeClass("ss-preload");
      $("html").addClass("ss-loaded");
    });
  };

  (function ssInit() {
    ssPreloader();
  })();
})(jQuery);
