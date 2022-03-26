import Ts from 'rollup-plugin-typescript2';

export default {
    input: [
        'src/index.ts',
        'src/atoms/Colour/index.ts',
        'src/atoms/Margin/index.ts'
    ],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true
    },
    plugins: [Ts()],
    preserveModules: true,
    external: ['react', 'FrontEndAndReactPractices/foundation']
}