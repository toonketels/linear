'use strict';

function Vector(items) {
    this.items = items instanceof Array ? items : [items];
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
})

module.exports = Vector;
