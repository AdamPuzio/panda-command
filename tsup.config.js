import { defineConfig } from 'tsup'

export default defineConfig({
  shims: true,
  splitting: true,
  target: 'esnext',
  platform: 'node',
  esbuildOptions(options, context) {
    // options.inject = ['src/cjs-shim.ts']
  }
})