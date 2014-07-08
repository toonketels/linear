var expect = require('chai').expect,
    Vector = require('../src/vector')

describe('Vector', function(){
    it('should create a new vector from an array of items passed', function(){
        var a = new Vector([12,3, 44]);
        expect(a.items).to.deep.equal([12,3,44]);
    });

    it('should create a vector of one when only a value is passed', function(){
        var a = new Vector(12);
        expect(a.items).to.deep.equal([12]);
    });

    describe('items', function() {
        it('should return the items in the vector', function() {
            var a = new Vector([12,3, 44]);
            expect(a.items).to.deep.equal([12,3,44]);
        });

        it('should not show up when iterating over the object', function() {
            var x = new Vector([3, 7, 2]),
                foundItems = false;

            for(var prop in x) {
                if (prop === 'items') foundItems = true;
            }

            expect(foundItems).to.be.false;
        })
    });

    describe('size', function() {
        it('should return the size of the vector', function() {
                var a = new Vector([12, 6, 3]);
                expect(a.size).to.equal(3);

                a = new Vector([12, 44]);
                expect(a.size).to.equal(2);
        });
    });

    describe('magnitude', function() {
        it('should return the magnitude of the vector', function() {
            a = new Vector([2, 2]);
            expect(a.magnitude).to.equal(2.8284271247461903);

            a = new Vector([7, 2, 8]);
            expect(a.magnitude).to.equal(10.816653826391969);
        });
    });
})
