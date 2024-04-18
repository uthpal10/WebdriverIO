describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.url("https://demoapps.qspiders.com/ui/frames/nested?sublist=1");
        await browser.pause(2000);
        let text1 = await browser.$("//span[.='Write a script to handle frames in web page?']").getText();
        console.log(`Text --> ${text1}`);
        await browser.pause(2000);
        await browser.switchToParentFrame();
        await browser.pause(2000);
        await browser.switchToFrame(0);
        await browser.pause(2000);
        // let text = await browser.$("//p[.='Default Email']").getText();
        // console.log(`Text --> ${text}`);
        // await browser.pause(2000); 
        
        // let q = await browser.$("//div[@class='login-container']");
        // await browser.switchToFrame(q)
        let text2 = await browser.$("//input[@id='email']").getText();
        console.log(`Text is ${text2}`);
        // await browser.$("//input[@id='email']").setValue("uthpal.ramesh10@gmail.com")
        await browser.pause(5000);
    })
})