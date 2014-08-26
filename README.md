compound-subject
================

A tiny JavaScript library for converting arrays of strings to compound subjects

## Installation

### Node

In your project directory:

```shell
npm install --save compound-subject
```

At the top of your module:

```javascript
var compoundSubject = require('compound-subject');
```

### Bower

In your project directory:

```shell
bower install --save compound-subject
```

In your HTML:

```html
<script src="bower_components/compound-subject/compound-subject.min.js"></script>
```

Or if you want the dev version:

```html
<script src="bower_components/compound-subject/compound-subject.js"></script>
```

`compoundSubject` will be defined in the global scope (i.e. `window`).

## Usage

```javascript
compoundSubject(['apple', 'banana', 'cherry']).make();

// 'apple, banana and cherry'


compoundSubject(['apple', 'banana', 'cherry'])
	.endWith('or')
	.make();

// 'apple, banana or cherry'


compoundSubject(['apple', 'banana', 'cherry'])
	.delimitAll()
	.endWith('and maybe')
	.make();

// 'apple, banana, and maybe cherry'


compoundSubject([
	'a very crunchy Honeycrisp apple',
	'bananas at the pinnacle of ripeness',
	'delectable halved Rainier cherries'
]).delimitWith(';')
	.delimitAll()
	.make();

// 'a very crunchy Honeycrisp apple; bananas at the pinnacle of ripeness; and delectable halved Rainier cherries'
```
