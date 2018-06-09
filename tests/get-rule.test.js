'use strict';

// The whole code are write in ES5 to preserve compatibility with browser
// Test files are writen in ES6+ due run enviroment

const chai = require('chai');
const mocha = require('mocha');
const getRules = require('../lib/get-rule.js');

const expect = chai.expect;

describe('Test getRule()', () => {
  it('expect an array with length 2 after send string to split', () => {
    var result = getRules('test:test');
    expect(result).to.be.a('array');
    expect(result.length).to.be.equal(2);
  });
});
