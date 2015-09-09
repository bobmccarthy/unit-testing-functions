'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMax', function() {
	it('should exist', function() {
        expect(functions.myMax).not.to.be.undefined;
    });
    it('should throw and error if "array" is not an array', function() {
        expect(function(){functions.myMax(1)}).to.throw('Invalid Input');
        expect(function(){functions.myMax({foo: 1})}).to.throw('Invalid Input');
        expect(function(){functions.myMax('1')}).to.throw('Invalid Input');
    });
    it('should return smallest number', function(){
    	expect(functions.myMax([2,3,4])).to.equal(4);
    })
})