import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/UI pages/HomePage';
import { SignUpPage } from '../../pages/UI pages/SignUpPage';
import { AccountCreatedPage } from '../../pages/UI pages/AccountCreatedPage';
import { DeleteButtonPage } from '../../pages/UI pages/DeleteButtonPage';
import { LogInPage } from '../../pages/UI pages/LogInPage';
import { LoggedInPage } from '../../pages/UI pages/LoggedInPage';




test('Test Case 4: Logout User', async ({ page }) => {
      const homePage = new HomePage(page);
      const signUpPage =new SignUpPage(page);
      const accountcreatedPage = new AccountCreatedPage(page);
      const deletebuttonPage = new DeleteButtonPage(page);
      const loginpage = new LogInPage(page);
      const loggedinpage = new LoggedInPage(page);


      await page.setViewportSize({ width: 1520, height: 820 });

      await page.goto('http://automationexercise.com');

      await homePage.verifyHomePageVisible();
      await page.waitForTimeout(1000);
      await homePage.clickSignupLogin();
      await page.waitForTimeout(1000);
      await loginpage.login('bolaAteftest@test.com','123456');
      await page.waitForTimeout(1000);
      await loggedinpage.pressonlogoutbutton();
      await page.waitForTimeout(1000);
      await loginpage.verifyNewUserSignUpVisible();
      await page.waitForTimeout(1000);


      console.log("Test Case 4: Logout User Done Successfully");

})
