var myProjs = [];

function Project(articleObj) {
  this.name = articleObj.name;
  // this.pubdate = articleObj.pubdate;
  this.body = articleObj.body;
  this.image = articleObj.image;
}
Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.find('.article-title').text(this.name);
  $newProject.find('.article-body').html(this.body);
  $newProject.find('.article-src').attr('src', this.image);
  $newProject.removeClass('template');
  return $newProject;
};

// $(".about").on("click", function() {
//   $(".theBox").hide();
//   $("#about").removeAttr("hidden");
// })

projects.forEach(function(obj) {
  myProjs.push(new Project(obj));
});

myProjs.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
$('.template').hide();
