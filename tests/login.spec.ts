import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage';


let loginpage: LoginPage;   //LoginPage is type same as classname

test('Verify_Title_TC01', async ({ page }) => {
  await page.goto('http://localhost:100');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("vtiger CRM - Commercial Open Source CRM");
  await page.close();
});

test('Verify_logo_TC02', async ({ page }) => {
 await page.goto('http://localhost:100');
 loginpage = new LoginPage(page);
 const isLogoDisplayed= await loginpage.isLogoDisplayed();
 await expect(isLogoDisplayed).toBe(true);
 await page.close();  
});
