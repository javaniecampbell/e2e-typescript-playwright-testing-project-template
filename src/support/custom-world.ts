import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { BrowserContext, Page } from 'playwright';

export interface CustomWorld extends World {
    context?: BrowserContext;
    page?: Page;
}

export class CustomWorld extends World implements CustomWorld {
    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);