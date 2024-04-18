import generic from "../../pageobjects/generic.js";
import LoginPage from "../../pageobjects/TestAutomation/LoginPage.js";
import rv from "fs";

let credentials = rv.readFileSync('./test/testData/data.json');
let parsedData = JSON.parse(credentials);

describe('fetchSingleDataFromJSON', () =>
{
    let un = parsedData.name
    let pwd = parsedData.password;
    console.log(un, pwd);

    it('loginAction', async() =>
    {
        await generic.launchTestAutomation();
        await LoginPage.login(un, pwd);
        await browser.pause(3000);
    })
})