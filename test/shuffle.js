var deck = require('deck');
var assert = require('assert');
var eql = assert.deepEqual;

function shuffler (fn) {
    var xs = [0,1,2,3,4,5,6,7,8,9];
    var xs_ = fn(xs);
    eql(xs, [0,1,2,3,4,5,6,7,8,9], 'shuffle mutated its argument');
    eql(xs.length, 10);
    assert.ok(xs.every(function (x) {
        return xs_.indexOf(x) >= 0
    }));
}

exports.shuffle = function () {
    shuffler(deck.shuffle);
};

exports.shuffleObj = function () {
    shuffler(function (xs) {
        return deck(xs).shuffle()
    });
};
