const expect = require('chai').expect;
const {FG_COLOR ,BG_COLOR ,TYPE , RESET} = require('../lib/ansiConstants');
const ColorOut = require('../index');


describe('colorOut - tests' , function(){

    const fakeLogger =  { 
        log: (txt) => (txt),
    };

    it('Should return ansi color-codes with text' , function(){
        
        let cout = new ColorOut(fakeLogger).bold.green;
        let str = 'Color me out of here!';
        let expected = `${BG_COLOR.bgDefault}${FG_COLOR.green}${TYPE.bold}${str}${RESET}`;
        expect(cout.log(str)).to.equal(expected);
    });
})