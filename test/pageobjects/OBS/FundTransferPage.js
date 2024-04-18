class AddBeneficiary
{
    get AddBeneficiarybtn()
    {
        return $("//input[@name='add_beneficiary']");
    }

    get DeleteBeneficiarybtn()
    {
        return $("//input[@name='delete_beneficiary']");
    }

    get ViewBeneficiarybtn()
    {
        return $("//input[@name='view_beneficiary']");
    }
    
    get BenefName()
    {
        return $("//input[@name='beneficiary_name']");
    }

    get BenefAccNo()
    {
        return $("//input[@name='beneficiary_acno']");
    }

    get BenefIFSC()
    {
        return $("//input[@name='Ifsc_code']");
    }

    get BenefACCTypeDD()
    {
        return $("//select[@name='beneficiary_acc_type']");
    }

    get AddBenefBtn()
    {
        return $("//input[@name='add_beneficiary_btn']");
    }

    get SelBenefDD()
    {
        return $("//select[@name='beneficiary']");
    }

    get Amountfld()
    {
        return $("//input[@name='trnsf_amount']");
    }

    get Remarkfld()
    {
        return $("//input[@name='trnsf_remark']");
    }

    get Sendbtn()
    {
        return $("//input[@name='fnd_trns_btn']");
    }

    get fundTransferTab()
    {
        return $("//li[.='Fund Transfer']");
    }

    get delBenefRadioBtn()
    {
        return $("//div[@class='delete_beneficiary_table_container']/descendant::tbody/tr[last()]/td[1]");
    }

    get delBenefBtn()
    {
        return $("//input[@name='delete_beneficiary']");
    }

    async AddBenef(name, Accno, ifsc, text)
    {
        await this.fundTransferTab.click();
        await browser.pause(1000);
        await this.AddBeneficiarybtn.click();
        await browser.pause(1000);
        await this.BenefName.setValue(name);
        await browser.pause(1000);
        await this.BenefAccNo.setValue(Accno);
        await browser.pause(1000);
        await this.BenefIFSC.setValue(ifsc);
        await browser.pause(1000);
        await this.BenefACCTypeDD.selectByVisibleText(text);
        await browser.pause(1000);
        await this.AddBenefBtn.click();
        await browser.pause(1000);
        await browser.acceptAlert();
        await browser.pause(2000);
    }

    async delBenef()
    {
        await this.fundTransferTab.click();
        await browser.pause(1000);
        await this.DeleteBeneficiarybtn.click();
        await browser.pause(1000);
        await this.delBenefRadioBtn.click();
        await browser.pause(1000);
        await this.delBenefBtn.click();
        await browser.pause(1000);
        await browser.acceptAlert();
        await browser.pause(2000);
    }

    async Transfer(key, value, amount, remarks)
    {
        await this.fundTransferTab.click();
        await browser.pause(1000);
        await this.SelBenefDD.selectByAttribute(key, value);
        await browser.pause(1000);
        await this.Amountfld.setValue(amount);
        await browser.pause(1000);
        await this.Remarkfld.setValue(remarks);
        await browser.pause(1000);
        await this.Sendbtn.click();
        await browser.pause(5000);
        // await browser.acceptAlert();
        // await browser.pause(2000);
    }
}
export default new AddBeneficiary();