import { expect, Page } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private NameonCard = '//*[@id="payment-form"]/div[1]/div/input';
  private CardNumber = '//*[@id="payment-form"]/div[2]/div/input';
  private CVC = '//*[@id="payment-form"]/div[3]/div[1]/input';
  private Expiration = '//*[@id="payment-form"]/div[3]/div[2]/input';
  private year = '//*[@id="payment-form"]/div[3]/div[3]/input';
  private payandconfirmeorderbutton = '//*[@id="submit"]';
  private successmessage = '//*[@id="form"]/div/div/div/h2/b';
  private continuebutton = '//*[@id="form"]/div/div/div/div/a';

  async  Enterpaymentdetails(){
    await this.page.fill(this.NameonCard,'test');
    await this.page.fill(this.CardNumber,'123456');
    await this.page.fill(this.CVC,'123');
    await this.page.fill(this.Expiration,'06');
    await this.page.fill(this.year,'2030');
    await this.page.click(this.payandconfirmeorderbutton);  
}

async VerifysuccessmessageisVisible(){
    await expect(this.page.locator(this.successmessage)).toBeVisible();
}

async pressoncontinuebutton(){
    await this.page.click(this.continuebutton);
}

}