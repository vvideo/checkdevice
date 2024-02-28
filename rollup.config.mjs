import path from 'path';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import cssnano from 'cssnano';

const withMinify = process.env['MINIFY'];

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
        postcss({
            config: true,
            extract: path.resolve('dist/index.css'),
             plugins: withMinify ? [
                cssnano,
            ] : [],
        }),
        withMinify ? terser() : undefined,
    ]
});

const configs = [
    'index',
].map(name => createConfig(name));

export default configs;
