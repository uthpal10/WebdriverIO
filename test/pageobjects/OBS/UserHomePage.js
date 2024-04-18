class UserHomePage
{
    get FundTransfTab()
    {
        return $("//li[.='Fund Transfer']");
    }

    get MyAccTab()
    {
        return $("//li[.='My Account']");
    }

    get MyProfTab()
    {
        return $("//li[.='My Profile']");
    }

    get ChangePwdTab()
    {
        return $("//li[.='Change Password']");
    }

    get StatementTab()
    {
        return $("//li[.='Statement']");
    }

    get LogoutBtn()
    {
        return $("//input[@name='logout_btn']");
    }

    async FundTransfoptions()
    {
        await this.FundTransfTab.click();
        await browser.pause(2000);
    }

    async logout()
    {
        await this.LogoutBtn.click();
        await browser.pause(2000);
    }
}
export default new UserHomePage()