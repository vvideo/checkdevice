import path from 'path';
import fs from 'fs';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import cssnano from 'cssnano';
import pages from './tools/getPagesForBuild.mjs';

const isProduction = process.env.NODE_ENV === 'production';

const createConfig = name => ({
    input: `src/entries/${name}.ts`,
    output: [
        {
            file: `static/${name}.js`,
            format: 'umd',
        },
    ],
    plugins: [
        typescript(),
        nodeResolve(),
        postcss({
            config: true,
            extract: path.resolve(`static/${name}.css`),
            plugins: isProduction ? [
                cssnano,
            ] : [],
        }),
        isProduction ? terser() : undefined,
    ]
});

export default pages.map(item => createConfig(item.id));
