# Exotic Object

## Description

In JavaScript, an **exotic object** is a type of object that has a non-standard behavior.

With the help of this library, we can create **exotic objects** with **custom behavior** for each operation that will be applied to the object.


## Installation

```
npm install exotic-object
```

## Usage Examples

Let's create an exotic object with only the function **call** operator defined, and any other operation on the object will cause an error.

```js
const {exoticObject} = require('exotic-object');

const obj = exoticObject({
    operation: {
        call: (state, arguments, thisArg) => {
            return "I am the result of the call"
        }
    }
});

// correct usage
const result = obj(); // "I am the result of the call"

// wrong usage
obj.abc = "Hello"; // SetNotAllowedError: Set is Not Allowed
obj.abc;           // GetNotAllowedError: Get is Not Allowed
```

## [Contributing](https://github.com/ruben-arushanyan/exotic-object/blob/master/CONTRIBUTING.md)

Read our [contributing guide](https://github.com/ruben-arushanyan/exotic-object/blob/master/CONTRIBUTING.md) to learn about our development process.

## [Code of Conduct](https://github.com/ruben-arushanyan/exotic-object/blob/master/CODE_OF_CONDUCT.md)

This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org) as its Code of Conduct, and we expect project participants to adhere to it. Please read the [full text](https://github.com/ruben-arushanyan/exotic-object/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Authors

- [Ruben Arushanyan](https://github.com/ruben-arushanyan)

## License

[MIT License](https://github.com/Ruben-Arushanyan/exotic-object/blob/master/LICENSE)