// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        port: 80,
        host: true
    },
    prefetch: {
        defaultStrategy: "viewport",
        prefetchAll: true
    },
    
});
