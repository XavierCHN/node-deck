var deck = require('deck');
var assert = require('assert');
var eql = assert.deepEqual;

exports.normalize = function (xs) {
    eql(
        deck.normalize({ a : 1, b : 3, c : 4 }),
        { a : 0.125, b : 0.375, c : 0.5 }
    );
};
