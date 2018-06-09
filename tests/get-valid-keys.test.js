'use strict';

// The whole code are write in ES5 to preserve compatibility with browser
// Test files are writen in ES6+ due run enviroment

const chai = require('chai');
const mocha = require('mocha');
const getValidKeys = require('../lib/get-valid-keys.js');

const expect = chai.expect;

describe('Test getValidKeys()', () => {
  const json = {
    "First-Name": 'John',
    "Middle-Name": "Nolan",
    "Last-Name": "Silva"
  };

  it('expect returns an array with 3 itens', () => {
    const schema = {
      'First-Name': 'firstName:string',
      'Middle-Name': 'middleName:string',
      'Last-Name': 'lastName:string'
    };

    let keys = getValidKeys(schema, json);

    expect(keys).to.be.a('array');
    expect(keys).to.include.members(['First-Name', 'Middle-Name', 'Last-Name']);
  });

  it ('expect returns an array with 2 itens after schema omit one key', () => {
    const schema = {
      'First-Name': 'firstName:string',
      'Middle-Name': 'omit',
      'Last-Name': 'lastName:string'
    };

    let keys = getValidKeys(schema, json);

    expect(keys).to.be.a('array');
    expect(keys).to.include.members(['First-Name', 'Last-Name']);
    expect(keys).to.not.include.members(['First-Name', 'Middle-Name']);
  });

  it('expect omit key with null and undefined value', () => {
    
  });

});
