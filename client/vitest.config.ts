import { defineConfig } from "vitest/config";
// biome-ignore lint/style/useNodejsImportProtocol:
import * as path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
  },
});
