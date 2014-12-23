var https = require('https');

var body = '',
    username = 'boostapp',
    icon_url = "http://i0.kym-cdn.com/photos/images/newsfeed/000/200/420/BRTky.jpg", // TODO needs updating
    request;

module.exports.send = function(config) {
    
    // https://hooks.slack.com/services/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
    body = JSON.stringify({
        text: config.text,
        username: username,
        icon_url: icon_url,
        channel: config.channel,
        unfurl_links: true,
        pretext: 'Today\'s boost sponsored by <a href="' + config.url + '">' + config.sponsor + '</a>'
    })

    request = https.request({
        hostname: "hooks.slack.com",
        port: 443,
        path: "/services/T037LJGDT/B037N12BC/1lkgkliRHUYGRMVvR0XZ9Xsa", // TODO hardcoded for dev
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(body)
        }
    })

    request.end(body)

}
