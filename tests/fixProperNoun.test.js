'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('fixProperNouns', function() {
	it('should exist', function() {
        expect(functions.fixProperNoun).not.to.be.undefined;
    });
    it('should throw an error if the input is not a string', function(){
    	expect(function(){functions.fixProperNoun(1) }).to.throw('Invalid Input');
    })
    it('should capitalize the first letter', function(){
    	expect(functions.fixProperNoun('bob')).to.equal('Bob');
    })
    it('should lower case the rest of the characters', function(){
    	expect(functions.fixProperNoun('bOB')).to.equal('Bob');
    })
})