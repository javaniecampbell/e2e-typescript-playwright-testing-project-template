import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';

let loginPage: LoginPage;

Given('I am on the login page', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.navigate();
});

When('I enter valid username and password', async function () {
    await loginPage.enterCredentials('validuser', 'validpassword');
});

When('I click the login button', async function () {
    await loginPage.clickLoginButton();
});

Then('I should be redirected to the dashboard', async function () {
    await expect(this.page).toHaveURL(/.*dashboard/);
});