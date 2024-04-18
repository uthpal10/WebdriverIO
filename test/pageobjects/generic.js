class launchBrowser
{
    async launchOBS()
    {
        await browser.pause(3000);
        await browser.navigateTo("http://rmgtestingserver/domain/Online_Banking_System/");
        await browser.maximizeWindow();
    }

    async launchTestAutomation()
    {
        await browser.navigateTo("https://practicetestautomation.com/practice-test-login/");
        await browser.maximizeWindow();
    }
}
export default new launchBrowser();