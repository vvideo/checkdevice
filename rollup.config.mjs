import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';

const createConfig = name => ({
    input: `src/${name}.ts`,
    output: [
        {
            file: `dist/${name}.js`,
            format: 'umd',
        },
]   ,
    plugins: [
        typescript(),
        nodeResolve(),
        css({
            output: `${name}.css`,
        }),
    ]
});

const configs = [
    'index',
].map(name => createConfig(name));

export default configs;
