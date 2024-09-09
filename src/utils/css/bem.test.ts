import { block } from './bem';

describe('bem', () => {
    it('block', () => {
        const b = block('block');
        expect(b()).toEqual('block');
    });

    it('block_mod', () => {
        const b = block('block');
        expect(b({ a: 'a', b: true, c: null, d: false, e: null, f: undefined })).toEqual('block block_a_a block_b');
    });

    it('__elem', () => {
        const b = block('block');
        expect(b('elem')).toEqual('block__elem');
    });

    it('elem_mod', () => {
        const b = block('block');
        expect(b('elem', { a: 'a', b: true, c: null, d: false, e: null, f: undefined })).toEqual('block__elem block__elem_a_a block__elem_b');
    });
});
