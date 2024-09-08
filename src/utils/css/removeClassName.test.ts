import { removeClassName } from "./removeClassName";

describe('#removeClassName', () => {
    it('with classList', () => {
        const elem = document.createElement('div');
        elem.className = 'colors color color1 color2 color3';
        removeClassName(elem, 'color');
        removeClassName(elem, 'color');
        removeClassName(elem, 'color2');
        removeClassName(elem, 'color1');

        expect(elem.className).toEqual('colors color3');
    });

    it('without classList', () => {
        const elem = { classList: '' } as any as HTMLDivElement;
        elem.className = 'colors color color1 color2 color3';

        removeClassName(elem, 'color');
        removeClassName(elem, 'color');
        removeClassName(elem, 'color2');
        removeClassName(elem, 'color1');

        expect(elem.className).toEqual('colors color3');
    });
});
