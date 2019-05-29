var lambda = require('./index');
var event = {}, context = {};

event.Records = [];
event.Records.push({Sns:{Subject: "hoge", Message: "moge"}});

callback = function(err, res) {
  if (err) {
  console.log(err);
  }

  if (res) {
  console.log(res);
  }
};
lambda.handler(event, context, callback);
