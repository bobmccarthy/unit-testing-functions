'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sortLetters', function() {
	it('should exist', function() {
        expect(functions.sortLetters).not.to.be.undefined;
    });
    it('should throw an error if the input is not a string', function(){
    	expect(function(){functions.sortLetters(1)}).to.throw('Invalid Input');
    })
    it('should letters in alphabetical order', function() {
        expect(functions.sortLetters('audh')).to.equal('adhu');
    });
})