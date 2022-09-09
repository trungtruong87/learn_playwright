import { test, expect } from "@playwright/test";

test.describe.skip("My first test suite", () => {

    test("Simple basic test", async ({ page }) => {
        await page.goto("https://www.example.com")
        const pageTitle = await page.locator("h1")
        await expect(pageTitle).toContainText("Example Domain")
    })

    test("Clicking on Elements", async ({ page }) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.type("#username", "admin")
        await page.click("#signin_button")
        await page.click("text=Sign in")

        const errorMessage = await page.locator(".alert-error")
        await expect(errorMessage).toContainText("Login and/or password are wrong.")
    })
})

test.describe.parallel("test before & after hooks @test", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.example.com")
    })

    test("screenshot", async ({ page }) => {
        await page.screenshot({ path: "screenshot.png", fullPage: true })
    })

    test("single element screenshot", async ({ page }) => {
        const element = await page.locator("h1")
        await element.screenshot({ path: "element.png" })
    })
})


