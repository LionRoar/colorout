
/**
 * FONT TYPES
 */
const TYPE = {
    normal: '\x1b[21m\x1b[22m\x1b[24m\x1b[27m',
    bold : '\x1b[1m',
    dim : '\x1b[2m',
    underline :'\x1b[4m',
    inverted : '\x1b[7m',
    hidden : '\x1b[8m'
};
/**
 * FOREGROUND COLORS
 */
const FG_COLOR = {
    default:  '\x1b[39m',
	black:    '\x1b[30m',
	red:      '\x1b[31m',
	green:    '\x1b[32m',
	yellow:   '\x1b[33m',
	blue:     '\x1b[34m',
	magenta:   '\x1b[35m',
	cyan:     '\x1b[36m',
	white:    '\x1b[37m'
};
/**
 * BACKGROUND COLORS
 */
const BG_COLOR = {
    bgDefault:  '\x1b[49m',
	bgBlack:    '\x1b[40m',
	bgRed:      '\x1b[41m',
	bgGreen:    '\x1b[42m',
	bgYellow:   '\x1b[43m',
	bgBlue:     '\x1b[44m',
	bgMagenta:   '\x1b[45m',
	bgCyan:     '\x1b[46m',
	bgWhite:     '\x1b[47m'
}
const RESET = '\x1b[0m';
module.exports = { TYPE , FG_COLOR , BG_COLOR ,RESET}