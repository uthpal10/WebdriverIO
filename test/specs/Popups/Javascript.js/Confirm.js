describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.navigateTo("https://demoapps.qspiders.com/ui/alert/confirm?sublist=1");
        await browser.pause(2000);
        await browser.$('#buttonAlert5').click();
        await browser.pause(2000);
        await browser.dismissAlert();
        await browser.pause(2000);
        console.log(`Handeled alert`); 
        await browser.pause(4000);
    })
})