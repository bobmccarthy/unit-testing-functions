'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('randomElement', function() {
	it('should exist', function() {
        expect(functions.randomElement).not.to.be.undefined;
    });
    it('should throw and error if input is not an array', function() {
        expect(function(){functions.randomElement(1)}).to.throw('Invalid Input');
    });
    it('should throw and error if input is not a populated array', function() {
        expect(function(){functions.randomElement()}).to.throw('Invalid Input');
    });
    it('should return a random value of the array', function() {
        var elements = ['a','b','c'];
        for(var i=0; i<1000; i++){
            var randomEl = functions.randomElement(elements);
            expect(elements.indexOf(randomEl)).to.be.above(-1);
        }
    });
})