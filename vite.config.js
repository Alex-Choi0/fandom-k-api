import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/fandom-k-ui/',
  base: "/", // 테스트용
});
