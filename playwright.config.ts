import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 6000,
    retries: 0,
    use: {
        headless: true,
        viewport: {
            width: 1280,
            height: 720
        },
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "off",
    },
    projects: [
        {
            name: "Chromium",
            use: { browserName: "chromium" },
        },
        {
            name: "Firefox",
            use: { browserName: "firefox" },
        },
        {
            name: "Webkit",
            use: { browserName: "webkit" },
        }
    ]
}

export default config