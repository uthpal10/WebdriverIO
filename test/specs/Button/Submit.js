describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.url("https://demoapps.qspiders.com/ui/button/buttonSubmit?sublist=3");
        await browser.pause(2000);
        await browser.maximizeWindow();
        await browser.pause(2000);
        await browser.$("//input[@id='sat1']").click();
        await browser.pause(2000);
        await browser.$("//button[@id='btn40']").click();
        await browser.pause(5000);

    })
})