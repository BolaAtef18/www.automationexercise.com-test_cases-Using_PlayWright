import { expect, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private Subscription ='//*[@id="footer"]/div[1]/div/div[1]/div[2]/div/h2';
  private susbscribe_email ='//*[@id="susbscribe_email"]';
  private subscribeButton ='//*[@id="subscribe"]/i';
  private successMessage ='//*[@id="success-subscribe"]/div';
  private BlueTopProduct = '//*[@id="product-1"]/td[2]/h4/a';




async scrollToFooter() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async VerifySUBSCRIPTIONisVisible(){
    await expect(this.page.locator(this.Subscription)).toBeVisible();
  }

   async  Enteremailclickbutton(email:string){
    await this.page.fill(this.susbscribe_email,email);
    await this.page.click(this.subscribeButton);
  }

   async successMessageisVisible(){
    await expect(this.page.locator(this.successMessage)).toBeVisible();
  }
  
  async Verifythatproductsisvisible(){

    const expected = "Blue Top";
    const actual = (await this.page.locator(this.BlueTopProduct).textContent())?.trim();
    expect(actual).toBe(expected);

  }

}
