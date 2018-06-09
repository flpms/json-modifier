'use strict';

var getRule = require('./get-rule.js');

function getKeysFromSchema(keys, schema) {

  function getSchemaKey(key) {
    if (!schema[key]) return key;
    return getRule(schema[key])[0];
  }

  return keys.map(getSchemaKey);
}

module.exports = getKeysFromSchema;
