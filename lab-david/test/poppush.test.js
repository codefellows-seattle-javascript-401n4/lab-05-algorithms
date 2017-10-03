const expect = require('expect');

describe('Push And Pop tests', () =>{
    it('should return 5', () => {
        expect([1,2,3,4,5].pop()).toEqual(5);
    });    

    it('should pop the 1 out of [1]', () => {
        expect([1].pop()).toEqual(1);
    });

    it('newArray shopuld be length 4', () => {
        let newArray = ['wizard', 'harry', 'potter'].push('dunno');
        expect(newArray).toBe(4);
    });

    it('pop potter off the end', () => {
        let newArray = ['wizard', 'harry', 'potter'].pop();
        expect(newArray).toEqual('potter');
    });

    it('should delete array and become undefined', () => {
        expect([].pop()).toEqual(undefined);
    });


    it('should be length 1 now', () => {
        expect([].push('hello')).toEqual(1);
    });
});