import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig((mode) => {
  return {
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode.mode),
    },
    plugins: [react()],
    build: {
      lib: {
        entry: "src/main.tsx",
        name: "work-status",
        fileName: "index",
      },
    },
  };
});
