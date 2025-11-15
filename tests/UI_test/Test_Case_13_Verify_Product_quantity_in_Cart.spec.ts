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
import { ProductDetails } from '../../pages/UI pages/ProductDetailsPage';
import { CartPage } from '../../pages/UI pages/CartPage';
import { ViewCartPage } from '../../pages/UI pages/ViewCartPage';



test('Test Case 13: Verify Product quantity in Cart', async ({ page }) => {
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
      const cartpage = new CartPage(page);
      const viewcartpage = new ViewCartPage(page);


      await page.setViewportSize({ width: 1520, height: 820 });

      //await page.goto('http://automationexercise.com');

      await page.goto('https://automationexercise.com', { waitUntil: 'domcontentloaded', timeout: 120000 });

      await homePage.verifyHomePageVisible();
      await page.waitForTimeout(1000);
      await homePage.pressonViewProduct();
      await page.waitForTimeout(1000);
      await productdetails.isproductdetailsvisible();
      await page.waitForTimeout(1000);
      await productdetails.IncreaseQuantity();
      await page.waitForTimeout(1000);
      await productdetails.pressonaddtocart();
      await page.waitForTimeout(1000);
      await productdetails.pressonViewCart();
      await page.waitForTimeout(1000);
      await viewcartpage.VerifyProductisVisible();
      await page.waitForTimeout(1000);
      await viewcartpage.verifyquantityequalnew();
      await page.waitForTimeout(1000);
    
      console.log("Test Case 13: Verify Product quantity in Cart Done Successfully");

})
