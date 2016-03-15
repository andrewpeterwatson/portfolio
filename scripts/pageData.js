
var articleView = {};

articleView.mainNav = function() {
  $('nav').on('click', 'li', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn(500);
  });
  $('nav ul li:first').click();
};
$(document).ready(function() {
  articleView.mainNav();
});
