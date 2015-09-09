'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMin', function() {
	it('should exist', function() {
        expect(functions.myMin).not.to.be.undefined;
    });
    it('should throw an error if the input is not a number', function(){
    	expect(function(){functions.myMin('a','a')}).to.throw('Invalid Input');
    })
    it('should throw an error "Numbers Are Equal" if the inputs are equal', function(){
    	expect(function(){functions.myMin(2,2)}).to.throw('Numbers Are Equal');
    })
    it('should return smallest number', function(){
    	expect(functions.myMin(2,3)).to.equal(2);
    })
})