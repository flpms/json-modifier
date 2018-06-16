'use strict';

var validateSchema = require('./lib/validate-schema.js');
var getValidKeys = require('./lib/get-valid-keys.js');
var getRecursiveKeys = require('./lib/get-recursive-keys.js');
var buildNewObject = require('./lib/build-new-object.js');

function JsonModifier(schema, json) {
  var validKeys, recursive, modifiedJSON;

  validateSchema(schema);

  validKeys = getValidKeys(json, schema);
  recursive = getRecursiveKeys(schema);
  modifiedJSON = buildNewObject(validKeys, json, schema);

  !!recursive.length && recursive.forEach(function (objKey) {
    modifiedJSON[objKey] = JsonModifier(schema[objKey], json[objKey]);
  });

  return buildedObject;
}

module.exports = JsonModifier;
