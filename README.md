# colorout.js

simple Nodejs library to log colorful messages to the console.
supports 16-colors.

## usage

```js

//require
const colorout = require('colorout');
//require COLOR AND TYPE CONSTANTS
const {TYPE , COLOR } = colorout;

/**
 *
 * @param { COLOR.[NAME] } foregroundColor?  //constant
 * @param { COLOR.[NAME] } backgroundColor? //constant
 * @param { TYPE.[NAME] } fontType? //constant
 **/
//colorout(foregroundColor ,backgroundColor ,fontType);

const green = colorout(COLOR.green , COLOR.white, TYPE.bold);
const error = colorout(COLOR.red);

green.log('I love green!');
error.log('This is an error message')

```

### Font `TYPE` CONSTANTS

```js
    .normal
    .bold
    .dim
    .underline
    .inverted
    .hidden
```

### foreground/background `COLOR` Constants

`16 colors`

The prefix `b` before the color name stands for `bright`

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
    .bBlack
    .bRed
    .bGreen
    .bYellow
    .bBlue
    .bMagenta
    .bCyan
    .bWhite

```