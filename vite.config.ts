import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: `${__dirname}/src/components`,
      styles: `${__dirname}/src/styles`,
      assets: `${__dirname}/src/assets`,
      utils: `${__dirname}/src/utils`,
    },
  },
  define: {
    "proces.env": process.env,
    global: "window",
  },
});
