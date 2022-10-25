import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {babel} from '@rollup/plugin-babel';
import autoprefixer from 'autoprefixer';
import simpleVars from 'postcss-simple-vars';
import requireContext from 'rollup-plugin-require-context';
import postcss from 'rollup-plugin-postcss'
import styles from 'rollup-plugin-styles';
import embedCSS from 'rollup-plugin-embed-css';

const packageJson = require("./package.json");

const rollupConfig = [
    {
        input: 'src/index.js',
        output: [
            {
                file: packageJson.module,
                format: 'esm',
                assetFileNames: 'assets/[name].[ext]',
            }
        ],
        external: [/@babel\runtime/, 'react'],
        plugins: [
            babel({babelHelpers: 'runtime', plugins:['@babel/plugin-transform-runtime'], compact: true}),
            resolve(),
            commonjs(),
            requireContext(),
            styles({
                plugins: [autoprefixer()],
                autoModules: true,
                mode: ['extract', 'global.css'],
              }),

        ]
    }
]

export default rollupConfig;