import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/UI pages/HomePage';
import { SignUpPage } from '../../pages/UI pages/SignUpPage';
import { AccountCreatedPage } from '../../pages/UI pages/AccountCreatedPage';
import { DeleteButtonPage } from '../../pages/UI pages/DeleteButtonPage';
import { LogInPage } from '../../pages/UI pages/LogInPage';
import { LoggedInPage } from '../../pages/UI pages/LoggedInPage';
import { ContactUsPage } from '../../pages/UI pages/ContactUSPage';




test('Test Case 6: Contact Us Form', async ({ page }) => {
      const homePage = new HomePage(page);
      const signUpPage =new SignUpPage(page);
      const accountcreatedPage = new AccountCreatedPage(page);
      const deletebuttonPage = new DeleteButtonPage(page);
      const loginpage = new LogInPage(page);
      const loggedinpage = new LoggedInPage(page);
      const conatctuspage = new ContactUsPage(page);


      await page.setViewportSize({ width: 1520, height: 820 });

      await page.goto('http://automationexercise.com');

      await homePage.verifyHomePageVisible();
      await page.waitForTimeout(1000);
      await homePage.clickSignupLogin();
      await page.waitForTimeout(1000);
      await homePage.pressoncontactusbutton();
      await page.waitForTimeout(1000);
      await conatctuspage.isgetintouchVisiable();
      await page.waitForTimeout(1000);
      page.on('dialog',async dialog=> {
            console.log(dialog.message());
            await dialog.accept();
      });
      await page.waitForTimeout(1000);
      await conatctuspage.enterdata('bola','bola@test.com','test','test');
      await page.waitForTimeout(1000);
      await conatctuspage.is_Successe_Message_Visiable();
      await page.waitForTimeout(1000);
      await conatctuspage.pressonhomebutton();
      await page.waitForTimeout(1000);
      await homePage.verifyHomePageVisible();
      await page.waitForTimeout(1000);

      console.log("Test Case 6: Contact Us Form Done Successfully");

})
