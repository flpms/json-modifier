'use strict';

function convertTypeByRule(value, type) {
  if (typeof value === type) {
    return value;
  }

  if (type === 'string') {
    return !value ? '' : +value;
  }

  if (type === 'number') {
    return +value;
  }

  if (type === 'boolean') {
    return !!value;
  }
}

module.exports = convertTypeByRule;
