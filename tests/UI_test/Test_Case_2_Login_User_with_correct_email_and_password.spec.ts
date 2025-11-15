import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/UI pages/HomePage';
import { SignUpPage } from '../../pages/UI pages/SignUpPage';
import { AccountCreatedPage } from '../../pages/UI pages/AccountCreatedPage';
import { LogInPage } from '../../pages/UI pages/LogInPage';
import { LoggedInPage } from '../../pages/UI pages/LoggedInPage';
import { DeleteButtonPage } from '../../pages/UI pages/DeleteButtonPage';



test('Test Case 2: Login User with correct email and password', async ({ page }) => {
      const homePage = new HomePage(page);
      const signUpPage =new SignUpPage(page);
      const accountcreatedPage = new AccountCreatedPage(page);
      const loginpage = new LogInPage(page);
      const loggedinpage = new LoggedInPage(page);
      const deletebuttonPage = new DeleteButtonPage(page);


      await page.setViewportSize({ width: 1520, height: 820 });

      await page.goto('http://automationexercise.com');

      await homePage.verifyHomePageVisible();
      await page.waitForTimeout(1000);
      await homePage.clickSignupLogin();
      await page.waitForTimeout(1000);
      await loginpage.verifyNewUserSignUpVisible();
      await page.waitForTimeout(1000);
      await loginpage.signeup('Bola Atef','bolaAteftest123@test.com');
      await page.waitForTimeout(1000);
      await signUpPage.fillAccountInfo();
      await page.waitForTimeout(1000);
      await signUpPage.clickCreateAccount();
      await page.waitForTimeout(1000);
      await accountcreatedPage.isAccountCreatedVisible();
      await page.waitForTimeout(1000);
      await accountcreatedPage.pressoncontiuneButton();
      await page.waitForTimeout(1000);
      await loggedinpage.pressonlogoutbutton();
      await page.waitForTimeout(1000);
      await loginpage.isLogintoyouraccountVisible();
      await page.waitForTimeout(1000);
      await loginpage.login('bolaAteftest123@test.com','123456');
      await page.waitForTimeout(1000);
      await loggedinpage.isLogged_in_as_usernameVisible();
      await page.waitForTimeout(1000);
      await homePage.delete_button();
      await page.waitForTimeout(1000);
      await deletebuttonPage.isAccount_DeletedVisible();
      await page.waitForTimeout(1000);
      await deletebuttonPage.contine_button();

      
      console.log("Test Case 2: Login User with correct email and password Done Successfully");

})
