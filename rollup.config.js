/* eslint-disable node/no-unpublished-require */
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');
const fileSize = require('rollup-plugin-filesize');
/* eslint-enable */

module.exports = {
    external: ['styled-components', 'react', 'react-dom'],
    input: 'src/index.js',
    output: {
        exports: 'named',
        file: 'dist/index.js',
        format: 'umd',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'styled-components': 'styled'
        }
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            plugins: ['babel-plugin-styled-components'],
            presets: ['@babel/preset-env', '@babel/react'],
            runtimeHelpers: true
        }),
        commonjs(),
        json(),
        resolve(),
        fileSize()
    ]
};
