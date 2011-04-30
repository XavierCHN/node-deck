var deck = require('deck');
var assert = require('assert');
var eql = assert.deepEqual;

function shuffler (fn, x) {
    var xs = [0,1,2,3,4,5,6,7,8,9];
    var xs_ = fn(xs);
    eql(xs, [0,1,2,3,4,5,6,7,8,9], 'shuffle mutated its argument');
    eql(xs.length, 10);
    assert.ok(xs.every(function (x) {
        return xs_.indexOf(x) >= 0
    }));
};

exports.shuffle = function (xs) {
    shuffler(deck.shuffle, xs);
};

exports.shuffleObj = function (xs) {
    shuffler(function (ys) {
        return deck(ys).shuffle()
    }, xs);
};
