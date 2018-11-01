/**
 * FONT TYPES
 */
const TYPE = {
	normal: '\x1b[21m\x1b[22m\x1b[24m\x1b[27m',
	bold: '\x1b[1m',
	dim: '\x1b[2m',
	underline: '\x1b[4m',
	inverted: '\x1b[7m',
	hidden: '\x1b[8m'
};
/**
 * FOREGROUND COLORS
 */
const FG_COLOR = {
	default: '\x1b[39m',
	black: '\x1b[30m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
	white: '\x1b[37m',
	bBlack: '\u001b[30;1m',
	bRed: '\u001b[31;1m',
	bGreen: '\u001b[32;1m',
	bYellow: '\u001b[33;1m',
	bBlue: '\u001b[34;1m',
	bMagenta: '\u001b[35;1m',
	bCyan: '\u001b[36;1m',
	bWhite: '\u001b[37;1m'
};
/**
 * BACKGROUND COLORS
 */
const BG_COLOR = {
	default: '\x1b[49m',
	black: '\x1b[40m',
	red: '\x1b[41m',
	green: '\x1b[42m',
	yellow: '\x1b[43m',
	blue: '\x1b[44m',
	magenta: '\x1b[45m',
	cyan: '\x1b[46m',
	white: '\x1b[47m',
	bBlack: '\u001b[40;1m',
	bRed: '\u001b[41;1m',
	bGreen: '\u001b[42;1m',
	bYellow: '\u001b[43;1m',
	bBlue: '\u001b[44;1m',
	bMagenta: '\u001b[45;1m',
	bCyan: '\u001b[46;1m',
	bWhite: '\u001b[47;1m'
}

const RESET = '\x1b[0m';

const COLOR = {
	default: 'default',
	black: 'black',
	red: 'red',
	green: 'green',
	yellow: 'yellow',
	blue: 'blue',
	magenta: 'magenta',
	cyan: 'cyan',
	white: 'white',
	bBlack: 'bBlack',
	bRed: 'bRed',
	bGreen: 'bGreen',
	bYellow: 'bYellow',
	bBlue: 'bBlue',
	bMagenta: 'bMagenta',
	bCyan: 'bCyan',
	bWhite: 'bWhite'
}
module.exports = {
	COLOR,
	TYPE,
	FG_COLOR,
	BG_COLOR,
	RESET
}