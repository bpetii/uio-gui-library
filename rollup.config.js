import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {babel} from '@rollup/plugin-babel';
import autoprefixer from 'autoprefixer';
import requireContext from 'rollup-plugin-require-context';
import postcss from 'rollup-plugin-postcss'

const packageJson = require("./package.json");

const rollupConfig = [
    {
        input: 'src/index.js',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap:true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap:true,
            }
        ],
        external: [/@babel\runtime/, 'react'],
        plugins: [
            babel({babelHelpers: 'runtime', plugins:['@babel/plugin-transform-runtime']}),
            resolve(),
            commonjs(),
            requireContext(),
            postcss({
                modules: true,
              })
        ]
    }
]

export default rollupConfig;