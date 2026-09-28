import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// The site is served from https://<user>.github.io/hisham-portfolio/, so every
// asset URL is prefixed with that path in production builds. Change `base` to
// "/" if you later move to a custom domain or another host.
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/hisham-portfolio/" : "/",
});
