'use strcit';

function getValidKeys(json, schema) {

  function filterFunction(key) {
    var keyRule = schema[key];
    return typeof json[key] !== undefined && keyRule !== 'omit';
  }

  return Object.keys(json).filter(filterFunction);
}

module.exports = getValidKeys;
