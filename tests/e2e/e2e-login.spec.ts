import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage"
import { HomePage } from "../../page-objects/HomePage";

test.describe.only("Login / Logout Flow", () => {
    let loginPage: LoginPage
    let homePage: HomePage

    // Before hook
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)

        await homePage.visit()
        await homePage.clickSignIn()
    })
    // Negative scenario
    test("Negative scenario for login", async ({ page }) => {
        await loginPage.login("admin", "admin")
        await loginPage.wait(3000)
        await loginPage.assertErrorMessage("Login and/or password are wrong.")
    })
    // Positive scenario + Logout
    test("Positive scenario for login", async ({ page }) => {
        await loginPage.login("username", "password")
        await page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html")
        const accountSummaryTab = await page.locator("#account_summary_tab")
        await expect(accountSummaryTab).toBeVisible()
        await page.click("text=username")
        await page.click("text=Logout")
        await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html")
    })
})