import { Browser, chromium } from 'playwright';
import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { CustomWorld } from './custom-world';

setDefaultTimeout(60000);

declare global {
    var browser: any;
}

BeforeAll(async function () {
    global.browser = await chromium.launch({ headless: false });
});

AfterAll(async function () {
    await global.browser.close();
});

Before(async function (this: CustomWorld) {
    this.context = await global.browser.newContext();
    this.page = await this?.context?.newPage();
});

After(async function (this: CustomWorld) {
    await this.page?.close();
    await this.context?.close();
});