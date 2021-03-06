import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import pkg from "./package.json";

export default [
  {
    input: "src/useScreenSize.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
        strict: false,
      },
    ],
    plugins: [
      sass({ insert: true }),
      typescript({
        objectHashIgnoreUnknownHack: true,
        clean: true,
        tsconfigOverride: {
          compilerOptions: { declaration: true },
        },
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/useScreenSize.d.ts",
    output: [
      {
        file: "dist/main.d.ts",
        format: "cjs",
      },
    ],
    plugins: [dts()],
  },
];
