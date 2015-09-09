'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('absVal', function() {
	it('should exist', function() {
        expect(functions.absVal).not.to.be.undefined;
    });
    it('should throw an error if the input is not a number', function(){
    	expect(function(){functions.absVal('a')}).to.throw('Invalid Input');
    })
    it('should return the positive equivalent of a value if value is not positive', function() {
        expect(functions.absVal(-3)).to.equal(3);
    });
    

})