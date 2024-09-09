import { classname } from './classname';

describe('#classname', () => {
    it('strings', () => {
        const result = classname('c1', 'c2', 'c3');
        expect(result).toEqual('c1 c2 c3');
    });

    it('other types', () => {
        const result = classname(true, false, 'c1', '', 'c2', null, undefined);
        expect(result).toEqual('c1 c2');
    });
});
