# Translate json

Translate any JSON easily, provide a schema with new keys and type format to output a new format object

## Install

`npm install json-modifier`

## Usage

``` javascript
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

var translatedObject = TranslateJSON(schema, exampleObject);

console.log(translatedObject);
/*{
  name: 'Filipe M. Silva',
  age: 28
}*/
```

#### ROADMAP

- adjust to supporte recursive objects
- add `default` values support in schema
