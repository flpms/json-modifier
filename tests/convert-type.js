'use strict';

// The whole code are write in ES5 to preserve compatibility with browser
// Test files are writen in ES6+ due run enviroment

const chai = require('chai');
const mocha = require('mocha');
const convertTypeByRule = require('../lib/convert-type.js');

const expect = chai.expect;

describe('Test convertTypeByRule()', () => {
  it('expect return value when value type are equal type', () => {
    const type = 'string';
    const value = 'test';
    let result = convertTypeByRule(value, type);
    expect(result).to.be.equal(value);
  });

  it('expect return empty string when value are null', () => {
    const type = 'string';
    const value = null;
    let result = convertTypeByRule(value, type);
    expect(result).to.be.equal('');
  });

  it('expect return value when value type are equal type', () => {
    const type = 'string';
    const value = 'test';
    let result = convertTypeByRule(value, type);
    expect(result).to.be.equal(value);
  });

  it('expect return zero for null values', () => {
    const type = 'number';
    let value = null;
    let result = convertTypeByRule(value, type);
    expect(result).to.be.equal(0);
  });

  it('expect return value with a number type', () => {
    const type = 'number';
    let value = '10';
    let result = convertTypeByRule(value, type);
    expect(result).to.be.equal(10);
  });

  it('expect return true boolean type', () => {
    const type = "boolean";
    let value = 'true';

    let result = convertTypeByRule(value, type);
    expect(result).to.be.a('boolean');
    expect(result).to.be.true;
  });
});
