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

Project.all = [];

Project.loadAll = function(rawData) {
    Project.all = rawData.map(function (pd) {
      return new Project(pd)
  });
}
Project.fetchAll = function(callBack) {
  if (localStorage.rawData) {
    console.log("In Local");
    Project.loadAll(JSON.parse(localStorage.rawData));
    callBack();
  } else {
    $.ajax ({
      url: "../scripts/pages.json",
      method: "GET"
    }) .done(function(data, message, xhr) {
       console.log("not in local");
        localStorage.setItem('rawData', JSON.stringify(data));
        Project.loadAll(data);
        callBack();
      });
    }
}
