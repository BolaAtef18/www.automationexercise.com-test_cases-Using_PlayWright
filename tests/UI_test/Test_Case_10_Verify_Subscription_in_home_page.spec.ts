import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/UI pages/HomePage';
import { SignUpPage } from '../../pages/UI pages/SignUpPage';
import { AccountCreatedPage } from '../../pages/UI pages/AccountCreatedPage';
import { DeleteButtonPage } from '../../pages/UI pages/DeleteButtonPage';
import { LogInPage } from '../../pages/UI pages/LogInPage';
import { LoggedInPage } from '../../pages/UI pages/LoggedInPage';
import { ContactUsPage } from '../../pages/UI pages/ContactUSPage';
import { TestCasePage } from '../../pages/UI pages/TestCasePage';
import { ProductsPage } from '../../pages/UI pages/ProductsPage';
import { ProductDetails } from '../../pages/UI pages/ProductDetails';



test('Test Case 10: Verify Subscription in home page', async ({ page }) => {
      const homePage = new HomePage(page);
      const signUpPage =new SignUpPage(page);
      const accountcreatedPage = new AccountCreatedPage(page);
      const deletebuttonPage = new DeleteButtonPage(page);
      const loginpage = new LogInPage(page);
      const loggedinpage = new LoggedInPage(page);
      const conatctuspage = new ContactUsPage(page);
      const testcasepage = new TestCasePage(page);
      const productspage = new ProductsPage(page);
      const productdetails = new ProductDetails(page);


      await page.setViewportSize({ width: 1520, height: 820 });

      await page.goto('http://automationexercise.com');

      await homePage.verifyHomePageVisible();
      await page.waitForTimeout(1000);
      await homePage.scrollToFooter();
      await page.waitForTimeout(1000);
      await homePage.VerifySUBSCRIPTIONisVisible();
      await page.waitForTimeout(1000);
      await homePage.Enteremailclickbutton('Test123@test.com');
      await page.waitForTimeout(1000);
      await homePage.successMessageisVisible();
      await page.waitForTimeout(1000);

      console.log("Test Case 10: Verify Subscription in home page Done Successfully");

})
