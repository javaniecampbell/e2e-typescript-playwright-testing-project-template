import { Browser, chromium } from 'playwright';
import { BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60000);

let browser: Browser;

// Launch the browser before all tests
BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });
});

// Close the browser after all tests
AfterAll(async function () {
    await browser.close();
});