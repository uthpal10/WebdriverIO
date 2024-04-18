describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.navigateTo("https://demoapps.qspiders.com/ui/alert/prompt?sublist=2");
        await browser.pause(2000);
        await browser.$('#buttonAlert1').click();
        await browser.pause(2000);
        let alertstatus = await browser.isAlertOpen();
        if(alertstatus)
        {
            let text = await browser.getAlertText();
            console.log(`Prompt Text is ${text}`);
            await browser.sendAlertText("no");
            await browser.pause(1000);
            await browser.acceptAlert();
            await browser.pause(1000);
            let text1 = await browser.$("//p[.='You selected no']").getText();
            console.log(text1); 
        }
        else
        {
            console.log(`No prompt popup`);
        }
        await browser.pause(4000);
    })
})