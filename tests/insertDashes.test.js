'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('insertDashes', function() {
	it('should exist', function() {
        expect(functions.insertDashes).not.to.be.undefined;
    });
    it('should throw and error if input is not a string', function() {
        expect(function(){functions.insertDashes(['a'])}).to.throw('Invalid Input');
        expect(function(){functions.insertDashes(1)}).to.throw('Invalid Input');
        expect(function(){functions.insertDashes({a:1})}).to.throw('Invalid Input');
    });
    it('should insert dashed between letters', function() {
        expect(functions.insertDashes('a big goose call')).to.equal('a b-i-g g-o-o-s-e c-a-l-l'); 
    });
    
})