var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    // alexa.dynamoDBTableName = 'YourTableName'; // creates new table for userid:session.attributes

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('MyIntent');
        this.emit('WhatsUpIntent');
        this.emit('AMAZON.HelpIntent');
        this.emit('AMAZON.StopIntent');
        this.emit('AMAZON.CancelIntent');
    },

    // Tell hello world
    'MyIntent': function () {
        this.emit(':tell', 'Hello World from Alexa!');
    },

    // Ask what's up
    'WhatsUpIntent': function () {
        this.emit(':ask', 'What\'s up from Alexa!');
    },

    // Help / Help me
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'What can Alexa help you with?');
    },

    // Stop / Stop now
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Alexa will stop now. Let me know when you need me again.');
    },

    // Cancel / Cancel it
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Confirm cancellation from Alexa.');
    }
};
