'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sumSquares', function() {
	it('should exist', function() {
        expect(functions.sumSquares).not.to.be.undefined;
    });
    it('should throw and error if input is not a number', function() {
        expect(function(){functions.sumSquares('a')}).to.throw('Invalid Input');
    });
    it('should return sum of the squares of all the numbers, starting at 1, up to and including the input', function(){
        expect(functions.sumSquares(4)).to.equal(30);
    });
})