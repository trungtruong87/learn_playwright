import { test, expect } from "@playwright/test";
import { HomePage } from "../../page-objects/HomePage";

test.describe("Search function testing", () => {
    let homepage: HomePage

    test.beforeEach(async ({ page }) => {
        homepage = new HomePage(page)
        await homepage.visit()
    })

    test("Search result", async ({ page }) => {
        await homepage.search(" ")
        await expect(page).toHaveURL("http://zero.webappsecurity.com/search.html?searchTerm=+")
    })

})