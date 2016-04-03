(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    $('.tab-content').hide();
    $('#projects').fadeIn();
    $('.navEl').fadeIn();
  };

  projectsController.bodyHide = function() {
    $('.article-body').hide();
  }

  $(document).ready(function() {
    Project.fetchAll(articleView.inItIndexPage);
    projectsController.bodyToggle();
    projectsController.bodyHide();
    $('#projects').hide();
  });

  projectsController.bodyToggle = function() {
  $(".article-image").on("click", "a", function(){
    var $sectionEl = $(this).parent();
    $sectionEl.next().fadeToggle(500);
  });
  }


  module.projectsController = projectsController;
})(window);
