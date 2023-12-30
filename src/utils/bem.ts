export type BemMods = Record<string, string | number | boolean | null | undefined>;

export function block(name: string) {
    return function(mods?: BemMods | string) {
        let className = name;

        if (typeof mods === 'string') {
            return `${name}__${mods}`;
        }

        if (mods) {
            Object.keys(mods).forEach((modName) => {
                const modValue = mods[modName];
                if (modValue === false || modValue === null || modValue === undefined || modValue === '') {
                    return;
                }

                className += ' ' + name + '_';

                if (mods[modName] === true) {
                    className += modName;
                } else {
                    className += modName + '_' + modValue;
                }
            });
        }

        return className;
    }
}