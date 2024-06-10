describe('a', () =>
{
    it('q', async () =>
    {
        await browser.navigateTo('https://demoapps.qspiders.com/ui/dropdown?sublist=0');
        await browser.pause(2000);
        await browser.$("//select[@id='select2']").selectByVisibleText('Male');
        await browser.pause(8000);

    })
})