import { Page } from 'playwright';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('http://your-app-url.com/login');
    }

    async enterCredentials(username: string, password: string) {
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
    }

    async clickLoginButton() {
        await this.page.click('#login-button');
    }
}