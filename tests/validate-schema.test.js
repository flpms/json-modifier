'use strict';

const chai = require('chai');
const mocha = require('mocha');
const validateSchema = require('../lib/validate-schema.js');

const expect = chai.expect;

describe('Test validateSchema()', () => {

  it('expect throw an error for invalid schema', () => {
    const schema = {
      "First-Name": "firstName:string",
      "Middle-Nane": "middleName:string",
      "Last-Name": undefined
    };

    expect(function () {
      validateSchema(schema);
    }).to.throw('An invalid schema was provided');
  });

  it('expect return true to a valid schema', () => {
    const schema = {
      "First-Name": "firstName:string",
      "Middle-Nane": "middleName:string",
      "Last-Name": "lastName:string",
      "null-value": null,
      "object-value": {}
    };

    expect(validateSchema(schema)).to.be.true;
  });


});
