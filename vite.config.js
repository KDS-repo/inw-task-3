import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],

    // Need this to use something like absolute paths
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.'),
        }
    },

    server: {
        port: 5173,
        open: true,
        // Proxy not needed for a while
        /*
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
            }
        }
        */
    },

    build: {
        outDir: 'dist',
        sourcemap: true
    }
})