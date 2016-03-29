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
    Project.loadAll(JSON.parse(localStorage.rawData));
    callBack();
  } else {
    $.ajax ({
      url: "../scripts/pages.json",
      method: "GET"
    }) .done(function(data, message, xhr) {
        localStorage.setItem('rawData', JSON.stringify(data));
        Project.loadAll(data);
        callBack();
      });
    }
}

var fillText = ["test1","test2","test3","test4","test5"];
var usedText = [];
// TODO: DO IT THIS WAY!!!!!!!!
  fillText.forEach()


fillText.reduce(function(a,b) {
  console.log(b);
  usedText.push(b);
  console.log(usedText);
  return b;
},[-1])
  $('.dynamicText').text(usedText);




var txtEl = $('.dynamicText'),
    txt = txtEl.text(),
    txtLen = txt.length,
    timeOut,
    char = 0;

txtEl.text("|");

(function typeIt() {
  var typeSpeed = Math.round(Math.random() * (400 - 30)) + 30;
  timeOut = setTimeout(function() {
    char++;
    var type = txt.substring(0, char);
    txtEl.text(type + '|');
    typeIt();

    if (char === txtLen) {
      txtEl.text(txtEl.text().slice(0, -1));
      clearTimeout(timeOut);
    }
  }, typeSpeed);
}());
