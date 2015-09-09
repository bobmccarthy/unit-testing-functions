'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('randomElements', function() {
	it('should exist', function() {
        expect(functions.randomElements).not.to.be.undefined;
    });
    it('should throw and error if input is not an array', function() {
        expect(function(){functions.randomElements(1)}).to.throw('Invalid Input');
    });
    it('should throw and error if input is not a populated array', function() {
        expect(function(){functions.randomElements([null])}).to.throw('Invalid Input');
    });
    it('should return one random value of the array', function() {
        expect(functions.randomElements([0,'foo','cheeky'])).to.equal('foo');
    });
})