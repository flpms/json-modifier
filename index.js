'use strict'

var exampleJson = require('./.example.json');

var ValidateSchema = require('./lib/validate-schema.js');
var getValidKeys = require('./lib/get-valid-keys.js');
var getKeysSchema = require('./lib/get-keys-schema.js');

function Translate(schema, json, options) {

  var clone = {};

  validateSchema(schema);
  var validKeys = getValidKeys(json, schema);
  var newKeys = getKeysSchema(validKeys, schema);
}

module.exports = Translate;
