import { expect, Page } from '@playwright/test';

export class CheckOutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private AddressDetails = '//*[@id="cart_items"]/div/div[2]/h2';
  private ReviewYourOrder = '//*[@id="cart_items"]/div/div[4]/h2';
  private Comment ='//*[@id="ordermsg"]/textarea';
  private placeorderbutton ='//*[@id="cart_items"]/div/div[8]/a';


    async VerifyProductisVisible(){
      await expect(this.page.locator(this.AddressDetails)).toBeVisible();
      await expect(this.page.locator(this.ReviewYourOrder)).toBeVisible();
    }

    async addcommentandplaceorder(){
        await this.page.fill(this.Comment,'test');
        await this.page.click(this.placeorderbutton);
    }
}