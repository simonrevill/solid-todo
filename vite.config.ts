/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults, coverageConfigDefaults } from "vitest/config";
import solid from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [solid(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      {
        find: "test-utils",
        replacement: path.resolve(__dirname, "tests/test-utils.tsx"),
      },
    ],
  },
  test: {
    css: true,
    globals: true,
    environment: "jsdom",
    setupFiles: ["vitest.setup.ts"],
    reporters: ["verbose"],
    include: [...configDefaults.include, "tests"],
    exclude: [...configDefaults.exclude, "e2e"],
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        ...coverageConfigDefaults.exclude,
        "e2e",
        "playwright-report",
        "playwright.config.ts",
        "src/index.tsx",
        "src/types.ts",
      ],
      thresholds: {
        100: true,
      },
    },
  },
});
