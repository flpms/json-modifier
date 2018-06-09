'use strcit';

module.exports = function getValidKeys(schema, json) {
  return Object.keys(json).filter(function(key) {
    var keyRule = schema[key];
    return !!json[key] && keyRule !== 'omit' && typeof json[key] !== 'object';
  });
}
