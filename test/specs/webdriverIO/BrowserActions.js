describe('Launching browser', () => 
{
    it('find search and enter text', async() =>
    {
        await browser.navigateTo('https://only-testing-blog.blogspot.com/')
        // await browser.url('https://only-testing-blog.blogspot.com/');
        await browser.pause(2000);
        await browser.maximizeWindow();
        await browser.pause(2000);
        await browser.minimizeWindow();
        await browser.pause(2000);
        await browser.maximizeWindow();
        await browser.pause(2000);
        const title = await browser.getTitle();
        await browser.pause(2000);
        console.log(`Title is --> ${title}`);
        await browser.pause(2000);
        const url = await browser.getUrl();
        await browser.pause(2000);
        console.log(`url is --> ${url}`);
        await browser.pause(2000);
        await browser.refresh();
        await browser.pause(2000);
        await browser.back();
        await browser.pause(2000);
        await browser.forward();
        await browser.pause(5000);
    })

    it.skip('Title', async() =>
    // xit('Title', async() =>
    {
        await browser.url("https://www.google.com")
        const srchbox = await browser.$('#APjFqb');
        await srchbox.setValue('IPL 2024 today schedule');
        await srchbox.click();
        await browser.pause(3000)
    })

})