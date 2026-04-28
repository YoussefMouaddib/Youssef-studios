/// <reference types="node" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const PORT = Number(process.env.PORT) || 5173;

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: PORT,
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    port: PORT,
    allowedHosts: true,
  },
});
