class Homepage
{
    get staffloginbtn()
    {
        return $("//a[.='Staff Login']");
    }

    get openAccountbtn()
    {
        return $("//li[.='Open Account']");
    }

    get ApplyDebitcardbtn()
    {
        return $("//li[.='Apply Debit Card']");
    }

    get InternetBankingbtn()
    {
        return $("//a[normalize-space()='Internet Banking']");
    }

    get FundTransferbtn()
    {
        return $("//li[normalize-space()='Fund Transfer']");
    }

    get RegisterIntBanklnk()
    {
        return $("//li[.='Register']");
    }

    get LoginIntBanklnk()
    {
        return $("//li[normalize-space()='Login']")
    }

    async openAccount()
    {
        await this.openAccountbtn.click();
    }

    async ApplyDebitcard()
    {
        await this.ApplyDebitcardbtn.click();
    }

    async RegIntBanking()
    {
        await this.InternetBankingbtn.moveTo();
        await browser.pause(1000);
        await this.RegisterIntBanklnk.click();
        await browser.pause(1000);
    }

    async LoginIntBanking()
    {
        await this.InternetBankingbtn.moveTo();
        await browser.pause(1000);
        await this.LoginIntBanklnk.click();
        await browser.pause(1000);
    }

    async fundTransfer()
    {
        await this.FundTransferbtn.click();
        await browser.pause(1000);
    }

    async stafflogin()
    {
        await this.staffloginbtn.click();
        await browser.pause(2000);
    }

}
export default new Homepage();
