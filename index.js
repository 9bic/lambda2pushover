var Pushover = require('pushover-notifications');

exports.handler = function(event, context, callback) {
  var pushover = new Pushover({
    user: process.env.PUSHOVER_USER,
    token: process.env.PUSHOVER_TOKEN
  });

  var snsSubject = event.Records[0].Sns.Subject;
  var snsContent = event.Records[0].Sns.Message;
  var msg = {
    message: snsContent,
    title: snsSubject,
  };

  pushover.send(msg, function(err, res) {
    if (err) {
      callback(err.toString());
    }

    if (res) {
      callback(null, res.toString());
    }
  });
};
