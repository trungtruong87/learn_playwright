import { test, expect } from "@playwright/test";

test.describe("Feedback Form Testing", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://zero.webappsecurity.com/")
        await page.click("text=Feedback")
    })

    test("Fill and Clear the form", async ({ page }) => {
        await page.type("#name", "Learn Playwright")
        await page.type("#email", "learnplaywright@gmail.com")
        await page.type("#subject", "This is a Subject of the feedback.")
        await page.type("#comment", "This is a Comment of the feedback.")
        await page.click("input[name='clear']")

        const nameInput = await page.locator("#name")
        const emailInput = await page.locator("#email")
        const subjectInput = await page.locator("#subject")
        const commentInput = await page.locator("#comment")

        await expect(nameInput).toBeEmpty()
        await expect(emailInput).toBeEmpty()
        await expect(subjectInput).toBeEmpty()
        await expect(commentInput).toBeEmpty()
    })

    test("Fill and Submit the form", async ({ page }) => {
        await page.type("#name", "Learn Playwright")
        await page.type("#email", "learnplaywright@gmail.com")
        await page.type("#subject", "This is a Subject of the feedback.")
        await page.type("#comment", "This is a Comment of the feedback.")
        await page.click("input[name='submit']")
        await page.waitForSelector("#feedback-title")
    })
})