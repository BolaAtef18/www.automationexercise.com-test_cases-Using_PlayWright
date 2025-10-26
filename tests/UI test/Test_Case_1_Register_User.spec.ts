import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/UI pages/HomePage';
import { SignUpPage } from '../../pages/UI pages/SignUpPage';
import { AccountCreatedPage } from '../../pages/UI pages/AccountCreatedPage';
import { DeleteButtonPage } from '../../pages/UI pages/DeleteButtonPage';




test('Register User', async ({ page }) => {
      const homePage = new HomePage(page);
      const signUpPage =new SignUpPage(page);
      const accountcreatedPage = new AccountCreatedPage(page);
      const deletebuttonPage = new DeleteButtonPage(page);


      await page.setViewportSize({ width: 1520, height: 820 });

      await page.goto('http://automationexercise.com');

      await homePage.verifyHomePageVisible();
      await page.waitForTimeout(1000);
      await homePage.clickSignupLogin();
      await page.waitForTimeout(1000);
      await signUpPage.verifyNewUserSignUpVisible();
      await page.waitForTimeout(1000);
      await signUpPage.signeup('Bola Atef','bolaAteftest@test.com');
      await page.waitForTimeout(1000);
      await signUpPage.fillAccountInfo();
      await page.waitForTimeout(1000);
      await signUpPage.clickCreateAccount();
      await page.waitForTimeout(1000);
      await accountcreatedPage.isAccountCreatedVisible();
      await page.waitForTimeout(1000);
      await accountcreatedPage.pressoncontiuneButton();
      await page.waitForTimeout(1000);
      await homePage.isLogged_in_as_usernameVisible();
      await page.waitForTimeout(1000);
      await homePage.delete_button();
      await page.waitForTimeout(1000);
      await deletebuttonPage.isAccount_DeletedVisible();
      await page.waitForTimeout(1000);
      await deletebuttonPage.contine_button();
      console.log("Test Case 1: Register User Done Successfully");

})
