'use strict'

var getValidKeys = require('./lib/getValidKeys.js');

function Translate(schema, json) {

  var clone = {},
      key;
      
  var validKeys = getValidKeys(schema, json);

  console.log(validKeys);
}

module.exports = Translate;
