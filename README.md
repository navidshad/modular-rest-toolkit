# Modular-Rest-Toolkit
is a group of tools for developing Rest-APIs. 


### Methods:
1. `reply`: generate an structured Object as a response for clients.
2. `validateObject`: validate an object by given fields.
3. `createNavigator`: return an object with navigator properties.
4. `saveFromLink`: save file from a URL.
5. `removeFile` : remove a file.

## Install 

Install using [npm](https://www.npmjs.com/package/modular-rest):

```sh
npm i modular-rest-toolkit --save
```
```js
const tools = require('modular-rest-toolkit');
```

### 1. `reply` generating structured json
this tool will generate a simple structure based on 3 type of reply `data, message, error`. each reply has two property: `status, detail`;
here is how to generate a reply:
```js

// base parameters
tools.reply(status, detail);

// generate a success state
tools.reply('s', {'d': ['product1', 'product2']});
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


### 2. `validateObject`
this tool could be useful for forms to validate required fields.
here is how to generate a reply:
```js
//== check form object to figure out 'name phone' fields are not null. ==
let form = {
    'name'  : 'navid',
    'family': 'your family',
    'phone' : null,
    'city'  : 'your city'
};

let validated = tools.validateObject(form, 'name phone');
// returned {isValid: false, requires: ['phone']}
```

### 3. 'createNavigator'
this is a tool for create a navigator object with "pages, page, from, to" properties. it would be useful when you have a service which provides items troughout pages.
```js
let totalItems = 100;
let itemPerPage = 10;
let page = 1;

let navigator = tools.createNavigator(totalItems, itemPerPage, page),
/* 
    {
        // total pages & current page
        pages: 10, page: 1,

        //for selecting items from 0 to 10
        from: 0, to: 10,
    }
*/
```
### 4. `saveFromLink`
```js
tools.saveFromLink(url, saveAs);
```

### 5. `removeFile`
```js
tools.removeFile(path);
```
thank you for using Modular-Rest-toolkit :)

## update log
- 0.1.1
    - added createNavigator method.
    - added saveFromLink method
    - added removeFile method
- 0.1.0
    - change the 'replyGenerator' method to 'reply'.
    - added 'validateObject' method.
- 0.0.6
    - start point