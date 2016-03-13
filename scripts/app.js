var myProjs = [];

function Project(articleObj) {
  this.name = articleObj.name;
  this.body = articleObj.body;
  this.image = articleObj.image;
}
Project.prototype.toHtml = function() {
  var templateSrc = $("#article-template").text();
  var template = Handlebars.compile(templateSrc);
  return template(this);
  $newProject.removeClass('template');
};
$(".about").on("click", function(e) {
  e.preventDefault();
  $("header").attr("hidden", true);
  $(".project").attr("hidden", true);
  $("#about").removeAttr("hidden", true);
});
$(".home").on("click", function(e){
  e.preventDefault();
  $("#about").attr("hidden", true);
  $(".project").attr("hidden", true);
  $("header").removeAttr("hidden", true);
})
$(".projects").on("click", function(e){
  e.preventDefault();
  $("#about").attr("hidden", true);
  $("header").attr("hidden", true);
  $(".project").removeAttr("hidden", true);
  $(".article-body").attr("hidden", true);
})
// $(".imgSrc").on("click", function(e){
//   e.preventDefault();
//   $(".article-body").removeAttr("hidden");
// })

projects.forEach(function(obj) {
  myProjs.push(new Project(obj));
});

myProjs.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
$('.template').hide();
