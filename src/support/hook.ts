import { Before, After } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { ICustomWorld } from './custom-world';

// Declare the browser as a global variable
declare global {
    var browser: Browser;
}

// let context: BrowserContext;
// let page: Page;

// Before(async function () {
//     context = await global.browser.newContext();
//     page = await context.newPage();
//     this.context = context;
//     this.page = page;
// });

// After(async function () {
//     await page.close();
//     await context.close();
// });
// Before each scenario, create a new context and page
Before(async function (this: ICustomWorld) {
    this.context = await global.browser.newContext();
    this.page = await this?.context?.newPage();
});

// After each scenario, close the context and page
After(async function (this: ICustomWorld) {
    await this.page?.close();
    await this.context?.close();
});