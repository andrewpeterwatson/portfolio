(function(module) {

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

var fillImg = [
"/media/icons/aboutIcon.png"
,"/media/icons/HamburgerIcon.png"
,"/media/icons/lanternIcon.png"
]
var fillText = ["test1","nest","monkey","test4","cards"];
var usedText = [];
var counter = 0;
// $('.dynamicText').text("Time");

function createLoop(time, renderLocate, fillData, dataArr) {
  setTimeout(function () {
      fillData.push(dataArr[counter])
      $(renderLocate).attr("src", fillData);...
      counter++
    if (counter < dataArr.length + 1) {
      fillData.pop();
      createLoop(time, renderLocate, fillData, dataArr);
    } else {
      counter = 0,
      usedText = [];
      $(renderLocate).attr("src", fillData);
      createLoop(time, renderLocate, fillData, dataArr);
    }
  },time)
}
createLoop(1000,'#imgTest', usedText, fillImg);

// var txtEl = $('.dynamicText'),
//     txt = txtEl.text(),
//     txtLen = txt.length,
//     timeOut,
//     char = 0;
//
// txtEl.text("|");
//
// (function typeIt() {
//   var typeSpeed = Math.round(Math.random() * (400 - 30)) + 30;
//   timeOut = setTimeout(function() {
//     char++;
//     var type = txt.substring(0, char);
//     txtEl.text(type + '|');
//     typeIt();
//
//     if (char === txtLen) {
//       txtEl.text(txtEl.text().slice(0, -1));
//       clearTimeout(timeOut);
//     }
//   }, typeSpeed);
// }());



module.Project = Project;
})(window);
