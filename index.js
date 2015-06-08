var pushover = require('node-pushover');
var credential = require('./credential.json');

exports.handler = function(event, context) {
  var pushover = new push({
    user: credential.user,
    token: credential.token
  });
    var snsContent = event.Records[0].Sns.Message;
    var msg = {
      message: snsContent,
      title: "SNS2Pushover",
    };
    pushover.send(msg, function(err, result) {
      if (err) {
        context.fail(err);
      }
      context.succeed(result);
  });
};