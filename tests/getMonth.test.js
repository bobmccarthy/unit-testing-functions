'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('getMonth', function() {
	it('should exist', function() {
        expect(functions.getMonth).not.to.be.undefined;
    });
    it('should throw and error if input is not a number', function() {
        expect(function(){functions.getMonth('a')}).to.throw('Invalid Input');
        expect(function(){functions.getMonth([1])}).to.throw('Invalid Input');
        expect(function(){functions.getMonth({foo:1})}).to.throw('Invalid Input');
    });
    it('should throw and error if numMonth is not between 1 and 12', function() {
        expect(function(){functions.getMonth(13)}).to.throw('Invalid Input');
    });
    it('should change a number into a month', function() {
        expect(functions.getMonth(2)).to.equal('February');
    });

})