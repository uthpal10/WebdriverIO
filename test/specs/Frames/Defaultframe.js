describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.url("https://demoapps.qspiders.com/ui/frames?sublist=0");
        await browser.pause(2000);
        await browser.switchToFrame(0);
        await browser.pause(2000);
        await browser.$('#username').setValue("uthpal.ramesh10@gmail.com")
        await browser.pause(5000);  
    })
})