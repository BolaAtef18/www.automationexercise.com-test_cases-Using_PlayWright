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

test('Test Case 16: Place Order: Login before Checkout', async ({ page }) => {
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


      await page.setViewportSize({ width: 1520, height: 820 });
      await page.goto('http://automationexercise.com');

      //await page.goto('n', { waitUntil: 'domcontentloaded', timeout: 120000 });
      
      await homePage.verifyHomePageVisible();
      await page.waitForTimeout(1000);
      await homePage.clickSignupLogin();
      await page.waitForTimeout(1000);
      await loginpage.login('bolaAteftest@test.com','123456');
      await page.waitForTimeout(1000);
      await loggedinpage.isLogged_in_as_usernameVisible();
      await page.waitForTimeout(1000);
      await homePage.HoveronProduct(1);
      await page.waitForTimeout(1000);
      await productspage.pressonViewCart();
      await page.waitForTimeout(3000);
      await viewcartpage.VerifyProductisVisible();
      await page.waitForTimeout(1000);
      await viewcartpage.pressonproceedToCheckout();
      await page.waitForTimeout(1000);
      await checkoutpage.VerifyProductisVisible();
      await page.waitForTimeout(1000);
      await checkoutpage.addcommentandplaceorder();
      await page.waitForTimeout(1000);
      await paymentpage.Enterpaymentdetails();
      await page.waitForTimeout(1000);
      await paymentpage.VerifysuccessmessageisVisible();
      await page.waitForTimeout(1000);
      await paymentpage.pressoncontinuebutton();
      await page.waitForTimeout(1000);

      console.log("Test Case 16: Place Order: Login before Checkout Done Successfully");

})
