import generic from "../../pageobjects/generic.js";
import LoginPage from "../../pageobjects/TestAutomation/LoginPage.js";
import rv from "fs";

let credentials = JSON.parse(rv.readFileSync("./test/testData/data1.json"));

describe('fetchMultipleDataFromJSON', () =>
{
    credentials.forEach( data => 
    {
        let un = data.name;
        let pwd = data.password;
        // console.log(un, pwd);
        
        it('LoginAction', async() =>
        {
            await generic.launchTestAutomation();
            await LoginPage.login(un,pwd);
            await browser.pause(3000);
        })
    });
});