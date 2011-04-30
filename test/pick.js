var deck = require('deck');
var assert = require('assert');
var eql = assert.deepEqual;

function picker (fn, xs) {
    var xs = [0,1,2,3,4,5,6,7,8,9];
    var counts = {};
    var loops = 50000;
    
    for (var i = 0; i < loops; i++) {
        var x = fn(xs);
        counts[x] = (counts[x] || 0) + 1;
    }
    eql(Object.keys(counts).sort(), xs);
    eql(xs, [0,1,2,3,4,5,6,7,8,9], 'shuffle mutated its argument');
    
    xs.forEach(function (x) {
        assert.ok(
            counts[x] * xs.length >= loops * 0.95
        );
        
        assert.ok(
            counts[x] * xs.length <= loops * 1.05
        );
    });
}

exports.pick = function (xs) {
    picker(deck.pick, xs);
};

exports.pickObj = function (xs) {
    picker(function (ys) {
        return deck(ys).pick()
    }, xs);
};
