var exports = module.exports = function (xs) {
    if (!Array.isArray(xs)) {
        throw new TypeError('Must be an Array');
    }
    
    return Object.keys(exports).reduce(function (acc, name) {
        acc[name] = exports[name].bind(null, xs);
        return acc;
    }, {});
};

exports.shuffle = function (xs) {
    if (!Array.isArray(xs)) {
        throw new TypeError('Must be an Array');
    }
    
    var ys = xs.slice();
    var res = [];
    while (ys.length > 0) {
        var n = Math.floor(Math.random() * ys.length);
        res.push(ys.splice(n, 1)[0]);
    }
    
    return res;
};

exports.pick = function pick (xs) {
    if (!Array.isArray(xs)) {
        throw new TypeError('Must be an Array');
    }
    return xs[Math.floor(Math.random() * xs.length)];
};
