Parse.Cloud.define('currentTime', function(req, res) {
  res.success(""+new Date().getTime());
});


Parse.Cloud.define('hello', function(req, res) {
 res.success('hi');
});


Parse.Cloud.define('hello', function(req, res) {
  res.success('4');
});




Parse.Cloud.define('elementsBaidu', function(req, res) {
 res.success('document.getElementsByClassName(<ordinary-output target-output clearfix>)[0].innerText');
});

Parse.Cloud.define('gElements', function(req, res) {
 res.success('document.getElementsByClassName(<translation>)[0].innerHTML');
});

