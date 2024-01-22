import { Page, expect } from "@playwright/test";

export class TestBase {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    
    }

    /**
     * 
     * @param pageTitle Validate the page title in a page
     */
    public async assertPageTitle( pageTitle: string | RegExp){
        await expect(this.page).toHaveTitle(pageTitle);
        console.log("Validate the page title as expected: "+pageTitle);
    };

    /**
     * 
     * @param locator Press the button with the given selector.
     */
    public async clickElement(locator:string) {
      await this.page.waitForSelector(locator);    
      await this.page.click(locator);
      console.log("Button is clicked at the given locator: " +locator);
    };

    /**
     * 
     * @param locator Validate the expected text is present in the given locator 
     * @param expectedText 
     */
    public async assertTextInPage(locator: string, expectedText: string){
        await this.page.waitForLoadState('networkidle');
        const text = await this.page.textContent(locator);
        expect(text).toContain(expectedText);
        console.log("Retrieved Text: "+ text +" Matched with expected text: "+ expectedText + " :found in the given locator: "+ locator);
    }

}

export default TestBase;