describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.url("https://demoapps.qspiders.com/ui/alert?sublist=0");
        await browser.pause(2000);
        await browser.$('#buttonAlert2').click();
        await browser.pause(2000);
        await browser.acceptAlert();
        console.log(`Handeled alert`);
        await browser.pause(4000);
    })
})