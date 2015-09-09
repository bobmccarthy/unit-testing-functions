'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('findMaxDiff', function() {
	it('should exist', function() {
        expect(functions.findMaxDiff).not.to.be.undefined;
    });
    it('should throw and error if input is not an array', function() {
        expect(function(){functions.sumSquares('a')}).to.throw('Invalid Input');
        expect(function(){functions.sumSquares(1)}).to.throw('Invalid Input');
        expect(function(){functions.sumSquares({a:1})}).to.throw('Invalid Input');
    });
    it('should return false if all the numbers are equal', function() {
        expect(function(){functions.sumSquares([0]===[1])}).to.be.false; 
    });
    
})