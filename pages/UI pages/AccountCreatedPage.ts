import { Page } from '@playwright/test';

export class AccountCreatedPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

private accountCreatedText = '//*[@id=\"form\"]/div/div/div/h2/b';
private contiunebutton = '//*[@id=\"form\"]/div/div/div/div/a';



async isAccountCreatedVisible() {
    await this.page.waitForSelector(this.accountCreatedText);
  }

async pressoncontiuneButton(){
    await this.page.click(this.contiunebutton);
}


}