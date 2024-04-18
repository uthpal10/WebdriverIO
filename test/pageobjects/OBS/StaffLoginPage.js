class stafflogin
{
    get staffIdfld()
    {
        return $("//input[@name='staff_id']");
    }

    get passwordfld()
    {
        return $("//input[@name='password']");
    }

    get loginbtn()
    {
        return $("//input[@name='staff_login-btn']")
    }

    async login(id, pwd)
    {
        await this.staffIdfld.setValue(id);
        await browser.pause(1000);
        await this.passwordfld.setValue(pwd);
        await browser.pause(1000);
        await browser.execute( () => {window.scrollY})
        await browser.scroll(0, 200);
        await browser.pause(1000);
        await this.loginbtn.click();
        await browser.pause(2000);
    }
}
export default new stafflogin();