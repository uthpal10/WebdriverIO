import { Key } from 'webdriverio';
import excel from "exceljs";

describe("flipkart", () =>
{
    let excelpath = "./test/testData/Sample.xlsx";
    it("fetch", async() =>
    {
        await browser.url("https://www.flipkart.com/");
        await browser.maximizeWindow();
        await browser.pause(1000);
        await browser.$("//input[@title='Search for Products, Brands and More']").setValue("Iphones");
        await browser.keys(Key.Enter);

        let wb = new excel.Workbook();
        await wb.xlsx.readFile(excelpath);
        let sh = wb.getWorksheet("Sheet1");
        
        let phoneNames = await browser.$$("//div[@class='_4rR01T']");
        console.log(phoneNames.length);

        let phonePrices = await browser.$$("//div[@class='_30jeq3 _1_WHN1']");
        console.log(phonePrices.length);

        for(let i=0; i<phonePrices.length; i++)
        {
            let ph = phoneNames[i];
            let phone = await ph.getText();

            let pr = phonePrices[i];
            let price = await pr.getText();
            
            console.log(`Phone name is ===> ${phone} and the price is ===> ${price}`);
            
            sh.getRow(i+1).getCell(1).value=`Phone name is ===> ${phone} and the price is ===> ${price}`;
            await wb.xlsx.writeFile(excelpath);
        }
        await browser.pause(5000);
    })
})