'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('findMaxDiff', function() {
	it('should exist', function() {
        expect(functions.findMaxDiff).not.to.be.undefined;
    });
    it('should throw and error if input is not an array', function() {
        expect(function(){functions.findMaxDiff('a')}).to.throw('Invalid Input');
        expect(function(){functions.findMaxDiff(1)}).to.throw('Invalid Input');
        expect(function(){functions.findMaxDiff({a:1})}).to.throw('Invalid Input');
    });
    it('should return the maximal difference between 2 pieces of the array', function(){
        expect(functions.findMaxDiff([2,5,12,20])).to.be.equal(8);
    });
    it('should return 0 if all the numbers are the same', function(){
        expect(functions.findMaxDiff([2,2,2,2])).to.be.equal(0);
    });
    
})