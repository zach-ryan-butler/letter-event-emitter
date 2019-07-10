const LetterEmitter = require('./LetterEmitter');

describe('LetterEmitter', () => {
    let letterEmitter;
    beforeEach(() => {
       letterEmitter = new LetterEmitter();
    });

    it('splits a string and emits an event for each letter', done => {
        const callback = jest.fn();
        letterEmitter.on('Letter', data => {
            callback(data)
        });

        letterEmitter.once('end', () => {
            'hello world'.split('').forEach((letter, offset) => {
                expect(callback).toHaveBeenCalledWith({
                    letter,
                    offset
                });
            });
            done()
        });
        letterEmitter.read('hello world');
    });
});
