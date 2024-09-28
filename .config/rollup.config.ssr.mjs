import path from 'path';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

const createServerConfig = () => ({
    input: `src/entries/ssr.tsx`,
    output: [
        {
            file: `dist/ssr.mjs`,
            format: 'es',
        },
]   ,
    plugins: [
        typescript({ tsconfig: './tsconfig.ssr.json' }),
        nodeResolve(),
        postcss({
            config: true,
            extract: path.resolve(`dist/temp.css`),
        }),
    ]
});

export default createServerConfig();
