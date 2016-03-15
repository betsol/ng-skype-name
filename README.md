# betsol-ng-skype-name

[![Bower version](https://badge.fury.io/bo/betsol-ng-skype-name.svg)](http://badge.fury.io/bo/betsol-ng-skype-name)
[![npm version](https://badge.fury.io/js/betsol-ng-skype-name.svg)](http://badge.fury.io/js/betsol-ng-skype-name)


Skype name validation module for Angular.js (`^1.2`).

> —» [DEMO][demo] «—


## Features

- Provides a directive to be used with `ngModel`
- Also, provides a service that you can call directly


## Installation

### Install library with *npm*

`npm i --save betsol-ng-skype-name`


### Install library with *Bower*

`bower install --save betsol-ng-skype-name`


### Add library to your page

``` html
<script src="/node_modules/betsol-ng-skype-name/dist/betsol-ng-skype-name.js"></script>
```

You should use minified version (`betsol-ng-skype-name.min.js`) in production.


### Add dependency in your application's module definition

``` javascript
var application = angular.module('application', [
  // ...
  'betsol.skypeName'
]);
```


## Usage

### Directive

```html
<form name="myForm">
    <input name="skypeName" type="text" ng-model="vm.skypeName" bs-skype-name>
    <span ng-show="myForm.skypeName.$error.skypeName">
        Please enter a correct Skype-name in the field above!
    </span>
</form>
```

### Service

```javascript
module.controller('MyCtrl', function (skypeName) {
  var isValidSkypeName = skypeName.validate('some-skype-name');
  // ...
});
```

## API

### Service

Service name: `skypeName`.

#### Methods

* `validate(value: string): boolean` — validates the provided value and
                                       returns `true` if it's a valid Skype name,
                                       `false` otherwise

## Changelog

Please see the [changelog][changelog] for list of changes.


## Feedback

If you have found a bug or have another issue with the library —
please [create an issue][new-issue].

If you have a question regarding the library or it's integration with your project —
consider asking a question at [StackOverflow][so-ask] and sending me a
link via [E-Mail][email]. I will be glad to help.

Have any ideas or propositions? Feel free to contact me by [E-Mail][email].

Cheers!


## Developer guide

Fork, clone, create a feature branch, implement your feature, cover it with tests, commit, create a PR.

Run:

- `npm i` to initialize the project
- `gulp build` to re-build the dist files
- `gulp test` or `karma start` to test the code

Do not add dist files to the PR itself.
We will re-compile the module manually each time before releasing.


## Support

If you like this library consider to add star on [GitHub repository][repo-gh].

Thank you!


## License

The MIT License (MIT)

Copyright (c) 2016 Slava Fomin II, BETTER SOLUTIONS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

  [changelog]: CHANGELOG.md
  [so-ask]:    http://stackoverflow.com/questions/ask?tags=angularjs,javascript
  [email]:     mailto:s.fomin@betsol.ru
  [new-issue]: https://github.com/betsol/ng-skype-name/issues/new
  [gulp]:      http://gulpjs.com/
  [repo-gh]:   https://github.com/betsol/ng-skype-name
  [demo]:      http://betsol.github.io/ng-skype-name/
