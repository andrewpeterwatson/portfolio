var projects = [];
 function Project(opts){
   // TODO: Place main function here
 }

 Project.prototype.toHtml = function () {
   // TODO: Put functions together here
 };


//sloops through projects to set up new projects
 pages.forEach(function (projData){
   projects.push(new Project(projData));
 });


//places new projects in html
 projects.forEach(function(project){
   $('projects').append(project.toHtml());
 });
