import {Page} from '@playwright/test';

class LoginPage{

    page: Page;

    //page is an object of class. constructor is called as soon as object is created
    constructor(page: Page){     
        this.page = page;

    }
 
    loc_tb_lastname= "//input[@name='lastname']";
    loc_tb_company= "//input[@name='company']";
    loc_btn_save= "//input[@name='button']";

    async  createlead(lastname: string, company: string): Promise<void>
    {
        await this.setLastName(lastname);
        await this.setCompany(company);
        await this.clickSave();

    }

    async setLastName(lastname: string): Promise<void>
    {
        await this.page.fill(this.loc_tb_lastname, lastname);
    }

    async setCompany(company: string): Promise<void>
    {
        await this.page.fill(this.loc_tb_company, company)
    }

    async clickSave(): Promise<void>
    {
        await this.page.locator(this.loc_btn_save).nth(0).click;  // multiple save buttons hence need to pass index of Save button
    }
}