'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('mySubstring', function() {
	it('should exist', function() {
        expect(functions.mySubstring).not.to.be.undefined;
    });
    it('should throw and error if input is not a string and two numbers', function() {
        expect(function(){functions.mySubstring(['a'],{},[])}).to.throw('Invalid Input');
        expect(function(){functions.mySubstring(1)}).to.throw('Invalid Input');
        expect(function(){functions.mySubstring({a:1})}).to.throw('Invalid Input');
    });
    it('should output a string with specified characteristics', function() {
        expect(functions.sumSquares('abcde', 2, 3)).to.equal('cd'); 
    });
    
})