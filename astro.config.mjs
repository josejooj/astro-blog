// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        port: 80,
        host: true,
        allowedHosts: ["josejooj-astroblog.squareweb.app"]
    },
    prefetch: {
        defaultStrategy: "viewport",
        prefetchAll: true
    }    
});
