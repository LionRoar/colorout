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
    let style = `${fg}${bg}${fontType}`;
    let Newline = `\n`;

    if (!fg || !bg) throw new TypeError('invalid color parameter');
    
    function formatArgs(...argsArray){
        argsArray.forEach( (arg, index) => {
            argsArray[index] = `${style}${arg}${RESET}`;
        });
         return format(...argsArray);
    }

    return {
        log: (...args) => {
            let formatedArgs = formatArgs(...args);
            stdout.write(formatedArgs);
            stdout.write(Newline);
        },
        inline: (...args) =>{
            let formatedArgs = formatArgs(...args);
            return `${formatedArgs}${RESET}`;
        }
    }
}

function getFGColor(color) {
    return FG_COLOR[color];
}

function getBGColor(color) {
    return BG_COLOR[color];
}

colorout.COLOR = COLOR;
colorout.TYPE = TYPE;

module.exports = colorout;