'use strict';

function getRecursiveKeys(schema) {

  function filterFunction(key) {
    return !Array.isArray(key) && typeof schema[key] === 'object';
  }

  return Object.keys(schema).filter(filterFunction);
}

module.exports = getRecursiveKeys;
