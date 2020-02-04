import svgr from '@svgr/rollup'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import url from 'rollup-plugin-url'
import pkg from './package.json'

const createCssFileConfig = (file) => ({
    input: `src/static/css/${file}.css`,
    output: {
        file: `lib/${file}.css`,
        format: 'es'
    },
    plugins: [
        postcss({
            minimize: true,
            extract: true
        })
    ]
})

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: pkg.module,
                format: 'es',
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            external(),
            postcss({
                modules: true
            }),
            url(),
            svgr(),
            babel({
                exclude: 'node_modules/**',
                plugins: [
                    '@babel/plugin-external-helpers', 'babel-plugin-styled-components'
                ]
            }),
            commonjs()
        ]
    },
    ...['reset', 'styles'].map(createCssFileConfig)
]
