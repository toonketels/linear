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
        });

        // Note: since its an array, we still can modify it since item returns
        //       a reference to the array. We're ok with this for now.
        it('should be settable after the object has been created', function() {
            var x = new Vector([3, 7, 2]);
            expect(x.items).to.deep.equal([3,7,2]);

            x.items = [1, 3];
            expect(x.items).to.deep.equal([3, 7, 2]);
        });
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

    describe('dotProduct()', function() {
        it('should throw an error when the argument passed is not a vector', function() {
            var a = new Vector([2, 7]),
                b = [3, 2, 10],
                fn = function() {
                    a.dotProduct(b)
                };

            expect(fn).to.throw(/dotProduct need a vector passed as argument/);
        });

        it('should throw an error when the vectors are of different size', function() {
            var a = new Vector([2, 7]),
                b = new Vector([3, 2, 10]),
                fn = function() {
                    a.dotProduct(b)
                };

            expect(fn).to.throw(/dotProduct need two vectors of equal size/);
        });

        it('should return the dot product of the two vectors', function() {
            var a = new Vector([2, 7]),
                b = new Vector([3, 1]);

            expect(a.dotProduct(b)).to.equal(13);
            expect(a.dotProduct(new Vector([10, 3]))).to.equal(41);

            expect(new Vector([5, 20, 6, 8]).dotProduct(new Vector([2, 7, 11, 3]))).to.equal(240);
        });
    });

    describe('scale()', function() {
        it('should throw an error when the value passed is not a scalar', function() {
            var a = new Vector([6, 2, 11]);
            expect(function() { a.scale('something'); }).to.throw(/Vectors can only be scaled by numbers/);
            expect(function() { a.scale(1.2); }).not.to.throw(/Vectors can only be scaled by numbers/);
            expect(function() { a.scale(-20); }).not.to.throw(/Vectors can only be scaled by numbers/);
        });

        it('should return a new vector, a scaled version of the current one', function() {
            var a = new Vector([12, 4, 7]),
                scaled = a.scale(3);
            expect(scaled).to.be.instanceof(Vector);
            expect(scaled.items).to.deep.equal([36, 12, 21]);
        });
    });

    describe('add()', function() {
        it('should throw an error when the value passed is not a vector', function() {
            var a = new Vector([3, 7,4]);
            expect(function() { a.add(4); }).to.throw(/Vectors can only be added to vectors/);
        });

        it('should throw an error when the vector passed is not of equal size', function() {
            var a = new Vector([3, 7,4]);
            expect(function() { a.add(new Vector([2, 5])); }).to.throw(/Only vectors of equal size can be added/);
        });

        it('should return a new vector which is the sum of the two', function() {
            var a = new Vector([3, 7,4]),
                b = new Vector([2, 3, 1]),
                summed = a.add(b);

            expect(summed).to.be.instanceof(Vector);
            expect(summed.items).to.deep.equal([5, 10, 5]);
        });
    });
})
