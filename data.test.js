const values=require("./main.js");


it('values', () => {
    expect(values()).toBe(0);
});

describe('describe', () => {
    it('values2', () => {
        expect(values()).toBe(0);
    });
    
});
describe('describeBox', () => {
    describe('describeBox2', () => {
        it('values6', () => {
            expect(values()).toBe(0);
        });
    });
    
});
