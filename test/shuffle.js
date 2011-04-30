var deck = require('deck');
var assert = require('assert');
var eql = assert.deepEqual;
var ok = assert.ok;

exports.shuffle = function () {
    var xs = [0,1,2,3,4,5,6,7,8,9];
    var xs_ = deck.shuffle(xs);
    eql(xs, [0,1,2,3,4,5,6,7,8,9], 'shuffle mutated its argument');
    eql(xs.length, 10);
    ok(xs.every(function (x) {
        return xs_.indexOf(x) >= 0
    }));
};

exports.shuffleObj = function () {
    var xs = [0,1,2,3,4,5,6,7,8,9];
    var xs_ = deck(xs).shuffle();
    eql(xs, [0,1,2,3,4,5,6,7,8,9], 'shuffle mutated its argument');
    eql(xs.length, 10);
    ok(xs.every(function (x) {
        return xs_.indexOf(x) >= 0
    }));
};
