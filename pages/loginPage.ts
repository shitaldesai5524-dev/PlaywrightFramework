import {Page} from '@playwright/test';
 
export class LoginPage{

    page: Page;

    //page is an object of class. constructor is called as soon as object is created
    constructor(page: Page){     
        this.page = page;

    }
    loc_img_logo= "//img[@src='include/images/login_left.gif']";
    loc_tb_username= "//input[@name='user_name']";
    loc_tb_password= "//input[@name='user_password']";
    loc_btn_login= "//input[@name='Login']";

    async  login(userid: string, password: string): Promise<void>
    {
        await this.setUserName(userid);
        await this.setPassword(password);
        await this.clickLogin();

    }

    async setUserName(userid: string): Promise<void>
    {
        await this.page.fill(this.loc_tb_username, userid);
    }

    async setPassword(password: string): Promise<void>
    {
        await this.page.fill(this.loc_tb_password, password)
    }

    async clickLogin(): Promise<void>
    {
        await this.page.click(this.loc_btn_login);
    }

    async isLogoDisplayed(): Promise<boolean>
    {
        return await this.page.isVisible(this.loc_img_logo);
    }
}