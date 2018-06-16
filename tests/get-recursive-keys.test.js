'use strict';

// The whole code are write in ES5 to preserve compatibility with browser
// Test files are writen in ES6+ due run enviroment

const chai = require('chai');
const mocha = require('mocha');
const getRecursiveKeys = require('../lib/get-recursive-keys.js');

const expect = chai.expect;

describe('Test getRecursiveKeys()', () => {
  const json = {
    "First-Name": 'John',
    "Middle-Name": "Nolan",
    "Last-Name": "Silva"
  };

  it('expect returns an array with 1 item', () => {
    const schema = {
      'First-Name': 'firstName:string',
      'Middle-Name': 'middleName:string',
      'Last-Name': 'lastName:string',
      'Schema2': {}
    };

    let keys = getRecursiveKeys(schema);

    expect(keys).to.be.a('array');
    expect(keys).to.include.members(['Schema2']);
  });

  it ('expect returns empty array', () => {
    const schema = {
      'First-Name': 'firstName:string',
      'Middle-Name': 'omit',
      'Last-Name': 'lastName:string'
    };

    let keys = getRecursiveKeys(json, schema);

    expect(keys).to.be.a('array');
    expect(keys.length).to.be.equal(0);
  });

});
