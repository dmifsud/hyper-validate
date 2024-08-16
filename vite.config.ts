// vite.config.ts
import { defineConfig } from "vite";
import path from "path";
import dts from 'vite-plugin-dts';

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [dts()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "./src/main.ts"),
        name: 'HyperValidate', // Global variable name for IIFE build
        formats: ['es', 'cjs', 'iife'], // Build formats
        fileName: (format) => `hyper-validate.${format}.js`,
      },
      rollupOptions: {
        output: {
          globals: {},
          exports: 'default', // Ensure that the export is recognized as a default export
        },
      },
      outDir: "dist",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};