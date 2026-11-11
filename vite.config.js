import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/rock-paper-scissor/",
  plugins: [react()],
});
