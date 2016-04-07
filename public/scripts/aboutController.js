
(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('.tab-content').hide();
    $('#about').fadeIn().siblings().hide();
   repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
