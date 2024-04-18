class testAuto
{
    get usernamefld()
    {
        return $("//input[@name='username']");
    }

    get passwordfld()
    {
        return $("//input[@name='password']");
    }

    get submitbtn()
    {
        return $("//button[@id='submit']");
    }

    get logoutbtn()
    {
        return $("//a[.='Log out']");
    }

    async login(un, pwd)
    {
        await this.usernamefld.setValue(un);
        await browser.pause(500);
        await this.passwordfld.setValue(pwd);
        await browser.pause(500);
        await this.submitbtn.click();
        await browser.pause(500);
    }
}
export default new testAuto();