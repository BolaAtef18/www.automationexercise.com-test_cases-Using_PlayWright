import { Page } from '@playwright/test';

export class DeleteButtonPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

private Account_Deleted = '//*[@id=\"form\"]/div/div/div/h2/b';
private Contine_Button = '//*[@id=\"form\"]/div/div/div/div/a';


async isAccount_DeletedVisible(){
    await this.page.waitForSelector(this.Account_Deleted);
}

async contine_button(){
    await this.page.click(this.Contine_Button);
}



}