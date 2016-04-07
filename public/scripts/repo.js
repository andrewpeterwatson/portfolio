 (function(module) {
   var repos = {};

   repos.all = [];

   repos.requestRepos = function(callback) {
     $.ajax({
       type: 'POST',
       url:'http://localhost:3000/api.github.com/user/repos',
       headers: { Authorization: 'token ' + gitToken },
       success: function(data, status, xhr){
         repos.all = data;
         callback();
       },
       error: function(request, status, error){
         console.log('error:' + error)
       }
   });
   };

   repos.with = function(attr) {
     return repos.all.filter(function(repo) {
       return repo[attr];
     });
   };

   module.repos = repos;
})(window);
