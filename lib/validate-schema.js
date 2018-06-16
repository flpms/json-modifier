'use strict';

function validateSchema(schema) {
  var key;
  for (key in schema) {
    if (typeof schema[key] !== 'string' && typeof schema[key] !== 'object') {
      throw new Error('An invalid schema was provided');
      break;
    }
  }
  return true;
}

module.exports = validateSchema;
