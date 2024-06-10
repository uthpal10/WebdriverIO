describe('suite', () =>
{
    it('test', async () =>
    {
        await browser.url("https://demoapps.qspiders.com/ui/button?sublist=0&scenario=1");
        await browser.pause(2000);
        await browser.$("#btn").click();
        await browser.createWindow("window");
        const allwin = await browser.getWindowHandles();
        console.log(allwin);
        browser.switchWindow(allwin[1]);
        await browser.pause(5000);
    });
});