describe('suite', () =>
{
    it('title', async() =>
    {
        await browser.navigateTo("https://demoapps.qspiders.com/ui/link?sublist=0");
        await browser.pause(2000);
        await browser.$("//a[.='Contact Us']").click({ button : 'left' });
        await browser.pause(5000);
    })
})