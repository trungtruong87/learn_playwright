import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
    // Locator
    readonly page: Page
    readonly signinButton: Locator
    readonly searchInput: Locator
    readonly feedbackLink: Locator

    // Constructor
    constructor(page) {
        this.page = page
        this.signinButton = page.locator("#signin_button")
        this.searchInput = page.locator("#searchTerm")
        this.feedbackLink = page.locator("#feedback")
    }

    // Methods
    async clickSignIn() {
        await this.signinButton.click()
    }

    async clickFeedback() {
        await this.feedbackLink.click()
    }

    async search(value: string) {
        await this.searchInput.click()
        await this.searchInput.type(value)
        await this.page.keyboard.press("Enter")
    }

    async visit() {
        await this.page.goto("http://zero.webappsecurity.com/")
    }
}