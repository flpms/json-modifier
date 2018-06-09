'use strict';

// The whole code are write in ES5 to preserve compatibility with browser
// Test files are writen in ES6+ due run enviroment

const chai = require('chai');
const mocha = require('mocha');
const getKeysFromSchema = require('../lib/get-keys-schema.js');

const expect = chai.expect;

describe('Test getKeysFromSchema()', () => {
  const schema = {
    "Name": "name:string",
    "Age": "age:number",
  };

  it('expect an array that include original key that not are defined in schema', () => {
    const validKeys = ['Address', 'Name'];
    const transformedKeys = ['Address', 'name'];

    let result = getKeysFromSchema(validKeys, schema);

    expect(result).to.be.an('array');
    expect(result).to.include.members(transformedKeys);
  });

  it('expect an array which inclues all valid keys transformed', () => {
    const validKeys = ['Age', 'Name'];
    const transformedKeys = ['age', 'name'];

    let result = getKeysFromSchema(validKeys, schema);

    expect(result).to.be.an('array');
    expect(result).to.include.members(transformedKeys);
  });
});
