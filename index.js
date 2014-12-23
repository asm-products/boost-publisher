var Slack = require('./publishers/slack');

Slack.send({
    text: 'http://i3.kym-cdn.com/photos/images/original/000/883/008/685.jpg', // hardcoded for dev
    channel: '#general',
    token: null,
    sponsor: 'nithnodelabs',
    url: 'http://nithnodelabs.com'
});