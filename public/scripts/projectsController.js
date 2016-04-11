(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    $('.tab-content').hide();
    $('#projects').fadeIn().siblings().hide();
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

  articlesController.loadById = function(ctx, next) {
    console.log(ctx);
    var articleData = function(article) {
      ctx.articles = article;
      next();
    };


  module.projectsController = projectsController;
})(window);
