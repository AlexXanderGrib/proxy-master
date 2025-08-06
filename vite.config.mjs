import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";
import { builtinModules } from "module";

const external = [
  Object.keys(packageJson.devDependencies ?? {}),
  Object.keys(packageJson.optionalDependencies ?? {}),
  ...Object.keys(packageJson.dependencies ?? {}),
  ...builtinModules
];

export default defineConfig({
  appType: "custom",

  build: {
    target: ["node16"],
    minify: false,

    rollupOptions: {
      external,

      output: [
        {
          format: "cjs",
          preserveModules: true,
          exports: "named"
        },
        {
          format: "esm",
          entryFileNames: "[name].mjs",
          preserveModules: true
        }
      ]
    },

    lib: {
      name: "proxy-master",
      entry: {
        index: "./src/index.ts"
      }
    }
  },

  plugins: [
    dts({ exclude: ["./src/__tests__"], tsconfigPath: "./tsconfig.json" })
  ]
});
