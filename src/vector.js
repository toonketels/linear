'use strict';

function Vector(items) {
    var _items = items instanceof Array ? items : [items];

    Object.defineProperty(this, 'items', {
        enumerable: false,
        configurable: false,
        get: function() { return _items; }
    });
}

Object.defineProperty(Vector.prototype, 'size', {
    enumerable: false,
    configurable: false,
    get: function() { return this.items.length; }
});

Object.defineProperty(Vector.prototype, 'magnitude', {
    enumerable: false,
    configurable: false,
    get: function() {
        var squaredSum = this.items.reduce(function(memo, val) {
            return memo +  (val*val);
        }, 0);
        return Math.sqrt(squaredSum);
    }
});

Vector.prototype.dotProduct = function dotProduct(vector) {
    if (!(vector instanceof Vector)) throw new Error('dotProduct need a vector passed as argument');
    if (this.size !== vector.size) throw new Error('dotProduct need two vectors of equal size');

    return this.items.reduce(function(memo, val, index) {
        return memo + (val*vector.items[index]);
    }, 0);
}

module.exports = Vector;
