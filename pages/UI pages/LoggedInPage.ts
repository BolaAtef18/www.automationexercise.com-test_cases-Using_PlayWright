import { Page } from '@playwright/test';

export class LoggedInPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

    private logoutbutton='//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a';
    private LoggedIn_Username = '//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[10]/a';


    async pressonlogoutbutton() {
    await this.page.click(this.logoutbutton);
  }

   async isLogged_in_as_usernameVisible(){
    await this.page.waitForSelector(this.LoggedIn_Username);
  }
}