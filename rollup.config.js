import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {babel} from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import requireContext from 'rollup-plugin-require-context';

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
        external: [/@babel\runtime/, 'react', /\.css$/],
        plugins: [
            babel({babelHelpers: 'runtime', plugins:['@babel/plugin-transform-runtime']}),
            resolve(),
            commonjs(),
            requireContext(),
            postcss()
        ]
    }
]

export default rollupConfig;