const {TYPE , FG_COLOR , BG_COLOR ,RESET} = require('./ansiConstants');
const format =  require('util').format;
const Console = require('console').Console;

class Colorout {

    constructor(logger = console){
        this.logger = logger;
        this.FG_COLOR = FG_COLOR.default;
        this.BG_COLOR =  BG_COLOR.bgDefault;
        this.TYPE = TYPE.normal;

    }

    static get logger(){
        return new Colorout();
    }
    _getAnsiString(text){
        let colorsAnsi =`${this.BG_COLOR}${this.FG_COLOR}${this.TYPE}%s${RESET}`;
        return format(colorsAnsi,text);
    }
    log(text,...args){
        let ansi = format(this._getAnsiString(text),...args);
        return this.logger.log(ansi);
    }

}

function setupColors(obj,tag){
    for(let color in obj)
     {   
         Object.defineProperty(Colorout.prototype , color ,{
            get: function(){
                this[tag] = obj[color];
                return this;
            }
        });
    }
}



setupColors(TYPE ,'TYPE');
setupColors(FG_COLOR,'FG_COLOR');
setupColors(BG_COLOR , 'BG_COLOR');


module.exports = Colorout;