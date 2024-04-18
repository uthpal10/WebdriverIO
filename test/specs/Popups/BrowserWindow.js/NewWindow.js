describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.url("https://demoapps.qspiders.com/ui/browser?sublist=0");
        await browser.pause(2000);
        await browser.maximizeWindow();
        await browser.pause(2000);
        await browser.$("#browserLink1").click();
        await browser.pause(2000);
        let allwin = await browser.getWindowHandles();
    
        await browser.pause(2000);
        await browser.switchToWindow(allwin[1])
        await browser.pause(2000);
        await browser.$("//input[@id='email']").setValue("uthpal")
        await browser.pause(5000);
    })
})