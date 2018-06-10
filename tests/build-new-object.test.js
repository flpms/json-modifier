'use strict';

// The whole code are write in ES5 to preserve compatibility with browser
// Test files are writen in ES6+ due run enviroment

const chai = require('chai');
const mocha = require('mocha');
const buildNewObject = require('../lib/build-new-object.js');

const expect = chai.expect;

describe('Test buildNewObject()', () => {
  const json  = {
    "Name": "Filipe M. Silva",
    "Age": "28",
    "Residencial-Address": "152 Lemon"
  };

  const schema = {
    "Name": "name:string",
    "Age": "age:number",
    "Residencial-Address": 'omit'
  };

  it('expect get new object after call buildNewObject with validKeys param, json and schema', () => {
    let result = buildNewObject(['Name', 'Age'], json, schema);

    expect(result).to.be.a('object');
    expect(result).to.have.property('name');
    expect(result).to.have.property('age');
    expect(result).to.not.have.property('Residencial-Address');
    expect(result.name).to.be.a('string');
    expect(result.name).to.be.equal('Filipe M. Silva');
    expect(result.age).to.be.a('number');
    expect(result.age).to.be.equal(28);
  });
});
