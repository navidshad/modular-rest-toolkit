# Modular-Rest-Toolkit
is a group of tools for developing Rest-APIs. 


### Methods:
1. `reply`: generate an structured Object as a response for clients.
2. `validateObject`: validate an object by given fields.

## Install 

Install using [npm](https://www.npmjs.com/package/modular-rest):

```sh
npm i modular-rest-toolkit --save
```

### 1. `reply` generating structured json
this tool will generate a simple structure based on 3 type of reply `data, message, error`. each reply has two property: `status, detail`;
here is how to generate a reply:
```js
const reply = require('modular-rest-toolkit').reply;


// base parameters
reply(status, detail);

// generate a success state
reply('s', {'d': ['product1', 'product2']});
/*
    {
        'status': 'success',
        'data'  : ['product1', 'product2'],
    }
*/
```

#### status options
| passing char | result |
| ------------ | ------ |
| s | success |
| f | fail |
| e | error |

#### detail options
| passing char | result |
| ------------ | ------ |
| {d: ''} | {data: ''} |
| {e: ''} | {error: ''} |
| {m: ''} | {message: ''} |


### 1. `validateObject`
this tool could be useful for forms to validate required fields.
here is how to generate a reply:
```js
const validateObject = require('modular-rest-toolkit').validateObject;

//== check form object to figure out 'name phone' fields are not null. ==
let form = {
    'name'  : 'navid',
    'family': 'your family',
    'phone' : null,
    'city'  : 'your city'
};

let validated = validateObject(form, 'name phone');
// returned {isValid: false, requires: ['phone']}
```

thank you for using Modular-Rest-toolkit :)

## update log
- 0.1.0
    - change the 'replyGenerator' method to 'reply'.
    - added 'validateObject' method.
- 0.0.6
    - start point