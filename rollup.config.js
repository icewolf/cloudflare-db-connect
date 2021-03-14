import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';

const outputs = [
  { format: 'cjs', dir: './', entryFileNames: pkg.main },
  { format: 'es', file: pkg.module },
  { format: 'umd', file: pkg.browser, name: pkg.name },
];
export default outputs.map((output) => ({
  input: 'src/index.ts',
  output,
  plugins: [
    typescript({
      ...(output.format === 'cjs'
        ? {
            declaration: true,
            declarationDir: 'dist',
            rootDir: 'src/',
          }
        : {}),
    }),
  ],
}));
