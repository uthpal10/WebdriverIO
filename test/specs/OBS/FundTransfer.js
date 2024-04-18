import generic from "../../pageobjects/generic.js";
import HomePage from "../../pageobjects/OBS/HomePage.js";
import LoginIntBankPage from "../../pageobjects/OBS/LoginIntBankPage.js";
import FundTransferPage from "../../pageobjects/OBS/FundTransferPage.js";
import UserHomePage from "../../pageobjects/OBS/UserHomePage.js";


describe("OBS", () =>
{
    it("LoginIB", async() =>
{
    await generic.launchOBS();
    await expect(browser).toHaveUrl("http://rmgtestingserver/domain/Online_Banking_System/");
    await HomePage.LoginIntBanking();
    await LoginIntBankPage.Login(1011302, "Virushka@123");
    // await FundTransferPage.AddBenef("Ramesh", 1011291011889, 1011, "Saving"); // 1011711011681
    // await FundTransferPage.delBenef();
    // await FundTransferPage.Transfer("value", 1011291011889, 10000, "TestTransfer");
    await UserHomePage.logout();
})
})