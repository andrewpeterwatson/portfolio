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
};
projects.forEach(function(obj) {
  myProjs.push(new Project(obj));
});

myProjs.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
