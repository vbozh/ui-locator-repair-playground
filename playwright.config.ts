import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    webServer: {
        command: 'npx serve app -l 3006',
        url: 'http://localhost:3006',
        reuseExistingServer: true
    },
    use: {
        baseURL: 'http://localhost:3006',
        headless: true,
    },
});
