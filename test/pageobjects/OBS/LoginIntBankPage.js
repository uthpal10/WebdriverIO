class LoginIB
{
    get custIDfld()
    {
        return $("//input[@name='customer_id']");
    }

    get custIDfld()
    {
        return $("//input[@name='customer_id']");
    }

    get passwordfld()
    {
        return $("//input[@name='password']");
    }

    get loginbtn()
    {
        return $("//input[@name='login-btn']");
    }

    async Login(cid, pwd )
    {
        await this.custIDfld.setValue(cid);
        await browser.pause(1000);
        await this.passwordfld.setValue(pwd);
        await browser.pause(1000);
        await this.loginbtn.click();
        await browser.pause(2000);
    }
}
export default new LoginIB();