const expect = require('chai').expect;
const {
    FG_COLOR,
    BG_COLOR,
    RESET
} = require('../lib/ansiConstants');

const colorout = require('../index');
const {
    TYPE,
    COLOR
} = colorout;

describe('colorout tests', function () {

    it('Should return `ansi` color-codes with text', function () {

        let outputString = '';
        const fakeStdout = {
            'write': function fakeLogger(text) {
                outputString += text;
            }
        };
        let str = 'Color me out of here!';
        let expected = `${FG_COLOR.green}${BG_COLOR.bWhite}${TYPE.bold}${str}${RESET}\n`;
        let greenLogger = colorout(
            COLOR.green,
            COLOR.bWhite,
            TYPE.bold,
            fakeStdout).log(str);
        expect(outputString).to.equal(expected);
    });
})