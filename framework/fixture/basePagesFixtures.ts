import { test as baseTest } from "@playwright/test";
import CurrencyConverterPage from "../pages/currencyConverterPage";
import TestBase from "../common/testBase";


type pages = {
    currencyConverterPage: CurrencyConverterPage;
    testBase: TestBase;
};

const testPages = baseTest.extend<pages>({

    currencyConverterPage: async ({ page }, use) => {
        await use(new CurrencyConverterPage(page));
    },
    testBase: async ({ page}, use) => {
        await use(new TestBase(page));
    },

});

export const test = testPages;
export const expect = testPages.expect;
