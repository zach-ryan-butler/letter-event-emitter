const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
    read(str) {
        const lettersArray = str.split('');
        
        for( let i = 0; i < lettersArray.length; i++) {
            const letter = lettersArray[i]
            this.emit('Letter', { letter, offset: i })
        }
        this.emit('end');
    }
      
};

module.exports = LetterEmitter;
