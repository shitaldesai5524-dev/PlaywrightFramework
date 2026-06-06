import {Page} from '@playwright/test';

class LoginPage{

    page: Page;

    //page is an object of class. constructor is called as soon as object is created
    constructor(page: Page){     
        this.page = page;

    }
 
    loc_lnk_logout= "//a[text()='Logout']";
    loc_lnk_New_Lead= "//a[text()='New Lead']";
    loc_lnk_Leads= "//a[text()='Leads]";


    async clickLogout(): Promise<void>
    {
        await this.page.click(this.loc_lnk_logout);
    }

    async clickNewLead(): Promise<void>
    {
        await this.page.click(this.loc_lnk_New_Lead);
    }

    async clickLeads(): Promise<void>
    {
        await this.page.click(this.loc_lnk_Leads);
    }
}
