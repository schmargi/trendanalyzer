var app = require('./app');
var port_http = process.env.PORT || 3000;
var port_ws = process.env.PORT || 8080;
var server = app.listen(port_http, function() {
  console.log('Express server listening on port ' + port_http);
});
