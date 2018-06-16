'use strict';

function getValidKeys(json, schema) {

  function filterFunction(key) {
    return typeof json[key] !== undefined && schema[key] !== 'omit';
  }

  return Object.keys(json).filter(filterFunction);
}

module.exports = getValidKeys;
