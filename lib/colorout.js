const {
    TYPE,
    FG_COLOR,
    BG_COLOR,
    COLOR,
    RESET
} = require('./ansiConstants');

const format = require('util').format;

function colorout(
    foregroundColor = COLOR.default,
    backgroundColor = COLOR.default,
    fontType = TYPE.normal,
    stdout = process.stdout) {
    
    let fg = getFGColor(foregroundColor);
    let bg = getBGColor(backgroundColor);

    if (!fg || !bg)throw new TypeError('invalid color parameter');

    return {
        log: (...args) => {
            stdout.write(`${fg}${bg}${fontType}`);
            stdout.write(format(...args));
            stdout.write(`${RESET}\n`);
        }        
    }
}

function getFGColor(color) {
    return FG_COLOR[color];
}

function getBGColor(color) {
    return BG_COLOR[color];
}

colorout.COLOR = COLOR ;
colorout.TYPE = TYPE ;

module.exports = colorout;
