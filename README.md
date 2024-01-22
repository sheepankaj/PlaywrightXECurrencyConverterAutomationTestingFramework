# Playwright Automation Tetsing for XE Currency Converter website.
## Dependencies:
> 1. IDE used: Visual Studio Code
> 2. npm needs to install
> 3. Playwright test needs to be installed with Typescript language option
> 4. URL for SUT: http://www.xe.com/currencyconverter/
> 5. Framework used the POM model
> 6. Reporting: It uses the inbuilt reporting of playwright framework.

## The Acceptance criteria is to test multiple conversion rates
1. The test should iterate over 5 sets of sample data.
2. Example iteration :
> 2.1 The test should input from Euro to pounds.
> 
> 2.2 Verify the result on the proceeding page.

test folder has all tests.
## How to run the test:
> 1. Open terminal
> 2. enter as: npm run test:e2e:localchromeonly
> 3. Chrome will open and execute all tests

