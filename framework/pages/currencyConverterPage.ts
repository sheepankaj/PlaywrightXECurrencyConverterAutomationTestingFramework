import { Locator, Page, expect } from "@playwright/test";
import { TestBase } from '../common/testBase';
import * as data from '../common/data/data.json';

export default class CurrencyConverterPage {
    readonly page: Page;
    testBase: TestBase;
    readonly amountValue: Locator;
    readonly fromCurrencyField: Locator;
    readonly fromCurrencyDDL: Locator;
    readonly toCurrencyField: Locator;
    readonly toCurrencyDDL: Locator;
    public multiCurrencyConverterHeadingTextLocatorValue: string = "//h1[@class='heading__Heading1-sc-n07sti-0 evJkLg']";
    public currencyConvertedTableTextLocatorValue: string = "(//h3[contains(@class,'heading__Heading1-sc-n07sti-0 heading__Heading3-sc-n07sti-2')])[1]";
    public currencyChartTextLocatorValue: string = "//h1[contains(@class,'heading__Heading1-sc-n07sti-0 currency-charts__ChartHeading-sc-1kf16vc-3')]";

    public multiCurrencyConverterHeadingTextList: string[] = ["1 EUR to GBP - Convert Euros to British Pounds","1 EUR to USD - Convert Euros to US Dollars","1 EUR to CAD - Convert Euros to Canadian Dollars","1 EUR to AUD - Convert Euros to Australian Dollars","1 EUR to INR - Convert Euros to Indian Rupees"];
    public currencyConvertedTableTextList: string[] = ["Convert Euro to British Pound", "Convert Euro to US Dollar","Convert Euro to Canadian Dollar","Convert Euro to Australian Dollar","Convert Euro to Indian Rupee"];
    public currencyChartTextTextList: string[] = ["EUR to GBP Chart","EUR to USD Chart","EUR to CAD Chart","EUR to AUD Chart","EUR to INR Chart"];
    public multipleCurrencyLocatorValuesAtTODDL: string[] = ["#midmarketToCurrency-option-2","#midmarketToCurrency-option-0","#midmarketToCurrency-option-3","#midmarketToCurrency-option-4","#midmarketToCurrency-option-6"];

    constructor(page: Page) {
        this.page = page;
        this.testBase = new TestBase(page);
        this.amountValue = this.page.locator("#amount");
        this.fromCurrencyField = this.page.locator("#midmarketFromCurrency");
        this.fromCurrencyDDL = this.page.locator("#midmarketFromCurrency-listbox");
        this.toCurrencyField = this.page.locator("#midmarketToCurrency");
        this.toCurrencyDDL = this.page.locator("#midmarketToCurrency-listbox");


    };

    /**
     * Open Currency Converter website
     * Validate the title in the website
     */
    public async gotoCurrencyConverterWebsite() {
        await this.page.goto(data.baseURLforCurrencyConverterWebsite);
        // Expect a title "to contain" a substring.
        await this.testBase.assertPageTitle(/Xe Currency Converter - Live Exchange Rates Today/);
    };

    //#region Actions for different functionality

    /***
     * Click Accept cookies button
     */
    public async clickAcceptCookies()
    {
        await this.testBase.clickElement("//button[text()='Accept']");
        console.log("Accept cookies button clicked");
    }
    /**
     * 
     * @param amountValue Enter amount value
     */
    public async enterAmountValue(typeAmountValue: string="1") {
        await this.amountValue.fill(typeAmountValue);
        console.log("Enter the amount value at the given locator: "+typeAmountValue);
    };

    public async selectCurrencyValueAtFromField(){
        await this.fromCurrencyField.click();
        await this.page.waitForSelector("#midmarketFromCurrency-listbox");
        await this.testBase.clickElement("#midmarketFromCurrency-option-1");
        console.log("Select the From Currency value at the locator: "+this.fromCurrencyDDL);
    };
    
    public async selectCurrencyValueAtToField(expectedCurrency: string[0]){
        await this.toCurrencyField.click();
        await this.page.waitForSelector("#midmarketToCurrency-listbox");
        await this.testBase.clickElement(expectedCurrency);
        console.log("Select the To Currency value at the locator: "+this.fromCurrencyDDL);
    };

    /**
     * Click the Convert button
     */
    public async clickConvertButton() {
        await this.testBase.clickElement("(//button[@class='button__BaseButton-sc-1qpsalo-0 hXIpFU'])[3]");
    };


    /***
     * validate the expected Eur to GB currency text displayed after clicked the 'Convert' buttpn.
     */
    public async validateExpectedEurToGBCurrencyTextDisplayed()
    {
        this.selectCurrencyValueAtToField(this.multipleCurrencyLocatorValuesAtTODDL[0]);
        this.clickConvertButton();
        await this.testBase.assertTextInPage(this.multiCurrencyConverterHeadingTextLocatorValue,this.multiCurrencyConverterHeadingTextList[0]);
        await this.testBase.assertTextInPage(this.currencyConvertedTableTextLocatorValue,this.currencyConvertedTableTextList[0]);
        await this.testBase.assertTextInPage(this.currencyChartTextLocatorValue,this.currencyChartTextTextList[0]);
        console.log("Euro to GB curreny text is displayed: "+this.multiCurrencyConverterHeadingTextList[0]);
    }

    /***
     * validate the expected Eur to USD currency text displayed after clicked the 'Convert' buttpn.
     */
    public async validateExpectedEurToUSDCurrencyTextDisplayed()
    {
        this.selectCurrencyValueAtToField(this.multipleCurrencyLocatorValuesAtTODDL[1]);
        this.clickConvertButton();
        await this.testBase.assertTextInPage(this.multiCurrencyConverterHeadingTextLocatorValue,this.multiCurrencyConverterHeadingTextList[1]);
        await this.testBase.assertTextInPage(this.currencyConvertedTableTextLocatorValue,this.currencyConvertedTableTextList[1]);
        await this.testBase.assertTextInPage(this.currencyChartTextLocatorValue,this.currencyChartTextTextList[1]);
        console.log("Euro to USD curreny text is displayed: "+this.multiCurrencyConverterHeadingTextList[1]);
    }

    /***
     * validate the expected Eur to CAD currency text displayed after clicked the 'Convert' buttpn.
     */
    public async validateExpectedEurToCADCurrencyTextDisplayed()
    {
        this.selectCurrencyValueAtToField(this.multipleCurrencyLocatorValuesAtTODDL[2]);
        this.clickConvertButton();
        await this.testBase.assertTextInPage(this.multiCurrencyConverterHeadingTextLocatorValue,this.multiCurrencyConverterHeadingTextList[2]);
        await this.testBase.assertTextInPage(this.currencyConvertedTableTextLocatorValue,this.currencyConvertedTableTextList[2]);
        await this.testBase.assertTextInPage(this.currencyChartTextLocatorValue,this.currencyChartTextTextList[2]);
        console.log("Euro to CAD curreny text is displayed: "+this.multiCurrencyConverterHeadingTextList[2]);
    }

    /***
     * validate the expected Eur to AUD currency text displayed after clicked the 'Convert' buttpn.
     */
    public async validateExpectedEurToAUDCurrencyTextDisplayed()
    {
        this.selectCurrencyValueAtToField(this.multipleCurrencyLocatorValuesAtTODDL[3]);
        this.clickConvertButton();
        await this.testBase.assertTextInPage(this.multiCurrencyConverterHeadingTextLocatorValue,this.multiCurrencyConverterHeadingTextList[3]);
        await this.testBase.assertTextInPage(this.currencyConvertedTableTextLocatorValue,this.currencyConvertedTableTextList[3]);
        await this.testBase.assertTextInPage(this.currencyChartTextLocatorValue,this.currencyChartTextTextList[3]);
        console.log("Euro to AUD curreny text is displayed: "+this.multiCurrencyConverterHeadingTextList[3]);
    }

    /***
     * validate the expected Eur to INR currency text displayed after clicked the 'Convert' buttpn.
     */
    public async validateExpectedEurToINRCurrencyTextDisplayed()
    {
        this.selectCurrencyValueAtToField(this.multipleCurrencyLocatorValuesAtTODDL[4]);
        this.clickConvertButton();
        await this.testBase.assertTextInPage(this.multiCurrencyConverterHeadingTextLocatorValue,this.multiCurrencyConverterHeadingTextList[4]);
        await this.testBase.assertTextInPage(this.currencyConvertedTableTextLocatorValue,this.currencyConvertedTableTextList[4]);
        await this.testBase.assertTextInPage(this.currencyChartTextLocatorValue,this.currencyChartTextTextList[4]);
        console.log("Euro to INR curreny text is displayed: "+this.multiCurrencyConverterHeadingTextList[4]);
    }



    //#endregion

}