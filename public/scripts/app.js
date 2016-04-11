(function(module) {

var myProjs = [];

function Project(articleObj) {
  this.name = articleObj.name;
  this.body = articleObj.body;
  this.image = articleObj.image;
  this.backImg = articleObj.backImg;
  console.log(this.image);
};
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
    Project.names();
    Project.fillNum();
}
var filteredNames = [];
Project.names = function() {
  return Project.all.map(function(project){
    return project.name;
  }).reduce(function(a,b) {
      filteredNames.push(b);
      return a + b;
    },-1);
  };


  Project.fillNum = function() {
    $('#projNum').html(" Currently featuring " + filteredNames.length + " projects!");
  }



// $('span').html(facts[fact] + (facts[fact] - 1));
// TODO: This is the cycle function
// var fillImg = [
// "/media/icons/aboutIcon.png"
// ,"/media/icons/HamburgerIcon.png"
// ,"/media/icons/lanternIcon.png"
// ]
// var fillText = [" not found"," is on fire"," 404"," is alive","=42"];
// var usedText = [];
// var counter = 0;
// $('.dynamicText').text(" is mine");
//
// function createLoop(time, renderLocate, fillData, dataArr) {
//   setTimeout(function () {
//       fillData.push(dataArr[counter])
//       $(renderLocate).attr("src", fillData);
//       console.log(fillData);
//       counter++...
//     if (counter < dataArr.length + 1) {
//       fillData.pop();
//       createLoop(time, renderLocate, fillData, dataArr);
//       usedText = [];
//     } else {
//       counter = 0,
//       $(renderLocate).attr("src", fillData);
//       createLoop(time, renderLocate, fillData, dataArr);
//       usedText = [];
//     }
//   },time)
// }
// createLoop(1000,'#dynamicText', usedText, fillText);



// TODO: this is the type function
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

module.filteredNames = filteredNames;
module.Project = Project;
})(window);
