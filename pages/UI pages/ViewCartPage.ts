import { expect, Locator, Page } from '@playwright/test';

export class ViewCartPage {
  readonly page: Page;
  readonly price : Locator;
  readonly quantity:Locator;
  readonly totalprice:Locator;

  constructor(page: Page) {
    this.page = page;
    this.price =page.locator('//*[@id="product-1"]/td[3]/p');
    this.quantity = page.locator('//*[@id="product-1"]/td[4]/button');
    this.totalprice = page.locator('//*[@id="product-1"]/td[5]/p');
    
  }

  private product = '//*[@id="product-1"]';
  private quantityofprod = '//*[@id="product-1"]/td[4]/button';
  private proceedToCheckout = '//*[@id="do_action"]/div[1]/div/div/a';
  private Reg_Loginbutton = '//*[@id="checkoutModal"]/div/div/div[2]/p[2]/a/u';
  private Xbutton ='//*[@id="product-1"]/td[6]/a/i';
  private CartIsEmpty ='//*[@id="empty_cart"]/p/b';
  


  async VerifyProductisVisible(){
    await expect(this.page.locator(this.product)).toBeVisible();
  }

  async VerifyDataofProduct(){
    await expect(this.price).toBeVisible();
    await expect(this.quantity).toBeVisible();
    await expect(this.totalprice).toBeVisible();

    await expect(this.price).toHaveText('Rs. 500');
    await expect(this.quantity).toHaveText('1');
    await expect(this.totalprice).toHaveText('Rs. 500');
  }

  async verifyquantityequalnew(){
    await expect(this.page.locator(this.quantityofprod)).toBeVisible();
    await expect(this.page.locator(this.quantityofprod)).toHaveText('4');

  }

  async pressonproceedToCheckout(){
    await this.page.click(this.proceedToCheckout);
  }

  async pressonReg_Loginbutton(){
    await this.page.click(this.Reg_Loginbutton);
  }

  async pressonXButton(){
    await this.page.click(this.Xbutton);
  }
  async Verifythatcartisempty(){
    await expect(this.page.locator(this.CartIsEmpty)).toBeVisible();
  }

}