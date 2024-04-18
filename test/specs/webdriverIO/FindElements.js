
import { Key } from 'webdriverio'

describe ('title', () => 
{
    it('qwe', async() => 
    {
        await browser.url("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1");
        await browser.pause(2000);
        await browser.maximizeWindow();
        await browser.pause(2000);
        const allvalues = await browser.$$("//select[@id='select-multiple-native']").map(ele => ele.getText());
        console.log(allvalues);
        await browser.$("//select[@id='select-multiple-native']").selectByVisibleText('Poland')
        await browser.pause(5000);

    })
})