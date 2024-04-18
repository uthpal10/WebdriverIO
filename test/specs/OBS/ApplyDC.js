import HomePage from "../../pageobjects/OBS/HomePage.js";
import ApplyDCPage from "../../pageobjects/OBS/ApplyDCPage.js";
import generic from "../../pageobjects/generic.js";

describe("OBS", () =>
{
    it("applydebitcard", async() =>
{
    await generic.launchOBS();
    await expect(browser).toHaveUrl("http://rmgtestingserver/domain/Online_Banking_System/");
    await HomePage.ApplyDebitcardbtn.click();
    await ApplyDCPage.applyDC("virat", "10", "1996", "Feb", "AXOPV4331B", 8989898989, 1011451011302);
})
})
