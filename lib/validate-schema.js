'use strict';

function ValidateSchema(schema) {
  var key;
  for (key in schema) {
    if (typeof schema[key] !== 'string') {
      throw new Error('An invalid schema was provided');
      break;
    }
  }
  return true;
}

module.exports = ValidateSchema;
