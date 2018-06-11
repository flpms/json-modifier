# JSON Modifier

 [![Build Status](https://travis-ci.org/flpms/json-modifier.svg?branch=master)](https://travis-ci.org/flpms/json-modifier)

Transform any JSON easily, provide a schema with new keys and type format to output a new format object

## Install

`npm install json-modifier`

## Usage

``` javascript
var JsonModifier = require('json-modifier');

var exampleObject = {
  "Name": "Filipe M. Silva",
  "Age": "28",
  "Residencial-Address": "152 Lemon"
};

var schema = {
  "Name": "name:string",
  "Age": "age:number",
  "Residencial-Address": 'omit'
}

var translatedObject = JsonModifier(schema, exampleObject);

console.log(translatedObject);
/*
{
  name: 'Filipe M. Silva',
  age: 28
}
*/
```

## Schema instructions

Schema are a json which are formated by key/rule some examples:
`key`: `newKey:type`


**key**: Original key for modification;

**newKey**: new key after modification;

**type**: data type supported are string, number and boolean;

#### Attentions points for type modification


**string**: `null` and `undefined` values are modified to empty strings

**number**: `undefined` and non-numeric values will be transformed in NaN, and `null` values will be convert to 0

**boolean**: same behavior as transform any data in javascript

#### ROADMAP

- adjust to supporte recursive objects
- add `default` values support in schema
