var lambda = require('./index');
var event = {}, context = {};

event.Records = [];
event.Records.push({Sns:{Subject: "hoge", Message: "moge"}});

context.done = function(err, res) {
  console.log(err);
  console.log(res);
};
lambda.handler(event, context);
