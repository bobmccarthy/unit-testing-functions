'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('studentPairs', function() {
	it('should exist', function() {
        expect(functions.studentPairs).not.to.be.undefined;
    });
    it('should throw and error if input is not an array', function() {
        expect(function(){functions.studentPairs(1)}).to.throw('Invalid Input');
    });
    it('should throw and error if input is not a populated array', function() {
        expect(function(){functions.studentPairs([null])}).to.throw('Invalid Input');
    });
    
    it('should match 2 positions of the array together', function() {
        expect(functions.studentPairs(['bob','jim','joe','sally'])).to.deep.equal(['bob','sally']);
    });
})