(function(module) {
  var projectsController = {};

  Project.fetchAll(articleView.initIndexPage);
  projectsController.index = function() {
    $('.tab-content').hide();
    $('#projects').fadeIn();
  };


  module.projectsController = projectsController;
})(window);
