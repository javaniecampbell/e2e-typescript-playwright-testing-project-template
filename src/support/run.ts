import { Browser, chromium } from 'playwright';
import { BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import config from '../../playwright.config';

setDefaultTimeout(config.timeout!);

let browser: Browser;

// Launch the browser before all tests
BeforeAll(async function () {
    browser = await chromium.launch(config.use!);
});

// Close the browser after all tests
AfterAll(async function () {
    await browser.close();
});