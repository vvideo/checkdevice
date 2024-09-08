import { fillArray } from './fillArray';

describe('#fillArray', () => {
    it('fill default value', () => {
        const arr = new Array(20);
        fillArray(arr);

        expect(arr.length).toEqual(20);
        expect(arr.filter(item => item === 0).length).toEqual(20);
    });

    it('fill value', () => {
        const arr = new Array(20);
        fillArray(arr, 10);

        expect(arr.length).toEqual(20);
        expect(arr.filter(item => item === 10).length).toEqual(20);
    });
});
