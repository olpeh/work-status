import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "work-status",
    lib: {
      entry: "src/main.tsx",
      name: "work-status",
      fileName: "index",
    },
  },
});
