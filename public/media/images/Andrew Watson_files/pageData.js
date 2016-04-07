
var articleView = {};

articleView.mainNav = function() {
  $('nav').on('click', 'li', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn(500);
    $('.article-body').hide();
  });
  $('nav ul li:first').click();
};
$(document).ready(function() {
  articleView.mainNav();
  articleView.bodyToggle();
});

articleView.bodyToggle = function() {
$(".article-image").on("click", "a", function(){
  var $sectionEl = $(this).parent();
  $sectionEl.next().fadeToggle(500);
});
}
