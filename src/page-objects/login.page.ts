import { Page } from 'playwright';
import { config } from '../../config/index';
export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(`${config.baseUrl}/login`);
    }

    async enterCredentials(username: string, password: string) {
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
    }

    async clickLoginButton() {
        await this.page.click('#login-button');
    }
}