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
import { CheckOutPage } from '../../pages/UI pages/CheckOutPage';
import { PaymentPage } from '../../pages/UI pages/PaymentPage';
import { Category } from '../../pages/UI pages/Category';
import { BrandsPage } from '../../pages/UI pages/BrandsPage';

test('Test Case 19: View & Cart Brand Products', async ({ page }) => {
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
      const checkoutpage = new CheckOutPage(page);
      const paymentpage = new PaymentPage(page);
      const category = new Category(page);
      const brandspage = new BrandsPage(page);


      await page.setViewportSize({ width: 1520, height: 820 });
      await page.goto('http://automationexercise.com');

      //await page.goto('n', { waitUntil: 'domcontentloaded', timeout: 120000 });
      
      await homePage.verifyHomePageVisible();
      await page.waitForTimeout(1000);
      await homePage.pressonProductbutton();
      await page.waitForTimeout(1000);
      await productspage.VerifyBrandsisVisible();
      await page.waitForTimeout(1000);
      await productspage.pressonPoloBrand();
      await page.waitForTimeout(1000);
      await brandspage.verifyBrandPoloisVisiable();
      await page.waitForTimeout(1000);
      await brandspage.pressonH_MBrand();
      await page.waitForTimeout(1000);
      await brandspage.verifyBrandH_MisVisiable();
      await page.waitForTimeout(1000);
      

      console.log("Test Case 19: View & Cart Brand Products Done Successfully");

})
