import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import macrosPlugin from "vite-plugin-babel-macros"

export default defineConfig({
  plugins: [
    reactRefresh(),
    macrosPlugin(),
  ],
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// export default defineConfig({
//   plugins: [react()]
// })
