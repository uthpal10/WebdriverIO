describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.url("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2");
        await browser.pause(2000);
        await browser.switchToFrame(0);
        let text = await browser.$("//h2[.='Sign Up']").getText();
        console.log(`Text --> ${text}`);
        await browser.$("//input[@id='email']").setValue("uthpal.ramesh10@gmail.com");
        await browser.pause(1000);
        driver.switchToParentFrame();
        await browser.pause(1000);
        driver.switchToFrame(1);
        await browser.pause(1000);
        let text1 = await browser.$("//h2[.='Login']").getText();
        console.log(`Text --> ${text1}`);
        await browser.$("//input[@id='username']").setValue("uthpal.ramesh10@gmail.com");
        await browser.pause(5000);
    })
})