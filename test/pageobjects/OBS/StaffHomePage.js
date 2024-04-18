class ApprovePenAcc
{
    get approvePenAccbtn()
    {
        return $("//input[@name='apprvac']");
    }

    get creditCustBtn()
    {
        return $("//input[@name='credit_cust_ac']");
    }

    get delCustAccBtn()
    {
        return $("//input[@name='del_cust']");
    }

    get viewActCustbtn()
    {
        return $("//input[@name='viewdet']");
    }

    get viewCustByAccNoBtn()
    {
        return $("//input[@name='view_cust_by_ac']");
    }

    get applNobtn()
    {
        return $("//input[@name='application_no']");
    }

    get searchbtn()
    {
        return $("//input[@name='search_application']");
    }

    get approvebtn()
    {
        return $("//input[@name='approve_cust']");
    }

    get staffLogoutbtn()
    {
        return $("//input[@name='logout_btn']");
    }

    get custAccNofld()
    {
        return $("//input[@name='customer_account_no']");
    }

    get Amountfld()
    {
        return $("//input[@name='credit_amount']");
    }

    get creditBtn()
    {
        return $("//input[@name='credit_btn']");
    }

    async creditAmount(accno, amount)
    {
        await this.creditCustBtn.click();
        await browser.pause(1000);
        await this.custAccNofld.setValue(accno);
        await browser.pause(1000);
        await this.Amountfld.setValue(amount);
        await browser.pause(1000);
        await this.creditBtn.click();
        await browser.pause(2000);
        await browser.acceptAlert();
        await browser.pause(1000);
        await this.staffLogoutbtn.click();
        await browser.pause(2000);

    }

    async approveCustAppl(no)
    {
        await browser.execute( () => {window.scrollY})
        await browser.scroll(0, 150);
        await browser.pause(1000);
        await this.approvePenAccbtn.click();
        await browser.pause(1000);
        await this.applNobtn.setValue(no);
        await browser.pause(1000);
        await this.searchbtn.click();
        await browser.execute( () => {window.scrollY})
        await browser.scroll(0, 150);
        await browser.pause(1000);
        await this.approvebtn.click();
        await browser.pause(1000);
        let text = await browser.getAlertText();
        console.log(text);
        await browser.pause(2000);
        await browser.acceptAlert();
        await browser.pause(2000);
        await this.staffLogoutbtn.click();
        await browser.pause(2000);
    }

    async staffLogout()
    {
        await this.staffLogoutbtn.click();
    }
}
export default new ApprovePenAcc();