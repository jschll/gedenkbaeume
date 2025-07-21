import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
     },
  },
});
