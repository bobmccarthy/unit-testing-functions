'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');


describe('concatenateArrays', function() {
	it('should exist', function() {
        expect(functions.concatenateArrays).not.to.be.undefined;
    });
    it('should throw and error if "a" or "b" are not arrays', function() {
        expect(function(){functions.concatenateArrays(1,1) }).to.throw('Invalid Input');
    });
    it('should return an array of arrays', function(){
    	expect(functions.concatenateArrays([1,2,3],[4,5,6])).to.deep.equal([1,2,3,4,5,6]);
    })
})