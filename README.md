# colorout
simple javascript library to log colorful messages to the console.
supports 8-color only.
colorout wraps Nodejs [Class:Console](http://nodejs.cn/doc/node/console.html)

## usage

to construct a logger just chain style functions and the last will be your logging method for example

```js

//require
const Colorout = require('colorout');

const green = new Colorout().black.bold.bgGreen;
//
//chain background color text color  and text special style
const error = Colorout.logger.bgRed.black;
//then call log
green.log('I love green!');

error.log('This is an error message')


```

`Colorout.logger` is the same as `new Colorout()`


### Chainable functions

#### font types chains [use only one]

```js
    .normal
    .bold
    .dim
    .underline
    .inverted
    .hidden
```

#### foreground color chains [only one]

`8colors`

```js

    .default
    .black
    .red
    .green
    .yellow
    .blue
    .magenta
    .cyan
    .white

```

#### background chains [only one]

`8 colors all starts with bg-`

```js
    .bgDefault
    .bgBlack
    .bgRed
    .bgGreen
    .bgYellow
    .bgBlue
    .bgMagenta
    .bgCyan
    .bgWhite
```
