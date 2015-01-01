// dev shim
(function() {
  var shimRegex = new RegExp('(.*)app.js$');
  function findPrefix() {
    var els = document.getElementsByTagName('script');
    for (var i = 0; i < els.length; i++) {
      var match = els[i].getAttribute('src').match(shimRegex);
      if (match) {
        return match[1];
      }
    }
    return '';
  }
  var prefix = findPrefix();
  document.write("<script src='" + prefix + "../react/react.js'></script>");
  document.write("<script src='" + prefix + "../webjars/momentjs/2.8.3/moment.js'></script>");
  document.write("<script src='" + prefix + "../webjars/Pikaday/1.2.0/pikaday.js'></script>");
  document.write("<script src='" + prefix + "out/goog/base.js'></script>");
  document.write("<script src='" + prefix + "cljsbuild-main.js'></script>");
  document.write("<script>goog.require('example.main'); goog.require('example.figwheel');</script>");
})();
