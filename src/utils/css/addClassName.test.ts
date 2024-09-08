import { addClassName } from "./addClassName";

describe('#addClassName', () => {
    it('with classList', () => {
        const elem = document.createElement('div');
        addClassName(elem, 'color');
        addClassName(elem, 'color');
        addClassName(elem, 'color1');
        addClassName(elem, 'color1');
        addClassName(elem, 'color2');
        addClassName(elem, 'color2');

        expect(elem.className).toEqual('color color1 color2');
    });

    it('without classList', () => {
        const elem = { className: '' } as any as HTMLDivElement;

        addClassName(elem, 'color');
        addClassName(elem, 'color');
        addClassName(elem, 'color1');
        addClassName(elem, 'color1');
        addClassName(elem, 'color2');
        addClassName(elem, 'color2');

        expect(elem.className).toEqual('color color1 color2');
    });
});
