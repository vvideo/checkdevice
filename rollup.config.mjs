import path from 'path';
import fs from 'fs';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import cssnano from 'cssnano';

const pages = JSON.parse(fs.readFileSync('./src/pages/pages.json', 'utf-8'));

const withMinify = process.env['MINIFY'];

const createConfig = name => ({
    input: `src/entries/${name}.ts`,
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
            extract: path.resolve(`dist/${name}.css`),
            plugins: withMinify ? [
                cssnano,
            ] : [],
        }),
        withMinify ? terser() : undefined,
    ]
});

export default pages.map(item => createConfig(item.id));
