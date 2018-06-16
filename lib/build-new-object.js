'use strict';

var getRule = require('./get-rule.js');
var convertTypeByRule = require('./convert-type');

function buildNewObject(validKeys, json, schema) {
  var clone = {};

  function createObj(key) {
    var rule,
        type,
        newKey;

    if (typeof schema[key] === 'undefined' || typeof schema[key] === 'object') {
      return clone[key] = json[key];
    }

    rule = getRule(schema[key]);
    type = rule[1];
    newKey = rule[0];

    clone[newKey] = convertTypeByRule(json[key], type);
  }

  validKeys.forEach(createObj);

  return clone;
}

module.exports = buildNewObject;
