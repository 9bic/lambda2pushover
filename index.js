var Pushover = require('pushover-notifications');
var credential = require('./credential.json');

exports.handler = function(event, context) {
  var pushover = new Pushover({
    user: credential.user,
    token: credential.token
  });

  var snsSubject = event.Records[0].Sns.Subject;
  var snsContent = event.Records[0].Sns.Message;
  var msg = {
    message: snsContent,
    title: snsSubject,
  };

  pushover.send(msg, function(err, res) {
    console.log(err);
    console.log(res);
    context.done(err, res);
  }); 
};
