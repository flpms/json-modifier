# JSON Modifier

 [![Build Status](https://travis-ci.org/flpms/json-modifier.svg?branch=master)](https://travis-ci.org/flpms/json-modifier)

Transform any JSON easily, provide a schema with new keys and type format to output a new format object

## Install

`npm install json-modifier`

## Usage

``` javascript
const JsonModifier = require('json-modifier');

const exampleObject = {
  "Name": "Filipe M. Silva",
  "Age": "28",
  "Address": {
    "house-Number": "52",
    "Street": "Lemon",
    "State": "SP"
  }
};

const addressSchema = {
  "house-Number": "houseNumber:number",
  "Street": "street:string",
  "State": "state:string"
};

const schema = {
  "Name": "name:string",
  "Age": "omit",
  "Residencial-Address": "omit",
  "Address": addressSchema
}

const translatedObject = JsonModifier(schema, exampleObject);
console.log(translatedObject);
```
```JSON
{
  "name": "Filipe M. Silva",
  "Address": {
    "houseNumber": 52,
    "street": "Lemon",
    "state": "SP"
  }
}
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

- add `default` values support in schema
