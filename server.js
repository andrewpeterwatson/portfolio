var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


var proxyGitHub = function(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: { Authorization: 'token ' + process.env.GITHUB_TOKEN }
  }))(request, response);
};

app.use(express.static(__dirname + "/public"));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('public/index.html', { root: '.' });
});
app.listen(port, function() {
  console.log('Server running on port: ' + port);
});
