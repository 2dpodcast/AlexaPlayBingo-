'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.b431a4fa-3a03-4171-91e4-273b4303bf75"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Play Bingo';


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetBall');
    },
    'GetNextBallIntent': function () {
        this.emit('GetBall');
    },
    'GetBall': function () {
        // Get a random space fact from the space facts list
        var nextBall = 1 + Math.floor(Math.random() * 75);

        // Create speech output
        var speechOutput = "The next ball is " + nextBall;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, nextBall)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "Must do the help option soon";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
