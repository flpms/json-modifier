'use strict';

const chai = require('chai');
const mocha = require('mocha');
const ValidateSchema = require('../lib/validate-schema.js');

const expect = chai.expect;

describe('ValidateSchema()', () => {

  it('expect throw an error for invalid schema', () => {
    const schema = {
      "First-Name": "firstName:string",
      "Middle-Nane": "middleName:string",
      "Last-Name": null
    };

    expect(function () {
      ValidateSchema(schema);
    }).to.throw('An invalid schema was provided');
  });

  it('expect return true to a valid schema', () => {
    const schema = {
      "First-Name": "firstName:string",
      "Middle-Nane": "middleName:string",
      "Last-Name": "lastName:string"
    };

    expect(ValidateSchema(schema)).to.be.true;
  });


});
