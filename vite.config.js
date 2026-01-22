import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(), // clean, no extra babel compiler
  ],
  build: {
    outDir: "build",
  },
});
