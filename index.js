'use strict'

var exampleJson = require('./.example.json');

var validateSchema = require('./lib/validate-schema.js');
var getValidKeys = require('./lib/get-valid-keys.js');
var buildNewObject = require('./lib/build-new-object.js');

function JsonModifier(schema, json) {
  validateSchema(schema);
  var validKeys = getValidKeys(json, schema);
  return buildNewObject(validKeys, json, schema);
}

module.exports = JsonModifier;
