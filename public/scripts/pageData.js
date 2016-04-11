(function(module) {
var articleView = {};

$(document).ready(function() {
  $('#about').hide();
});


articleView.inItIndexPage = function() {
  Project.all.forEach(function(a) {
    $('#projects').append(a.toHtml());
  })
}

module.articleView = articleView
})(window);
