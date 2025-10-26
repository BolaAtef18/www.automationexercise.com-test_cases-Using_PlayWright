import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private signupLoginLink = '//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a';
  private HomePageLogo ='//*[@id="header"]/div/div/div/div[1]/div/a/img';
  private LoggedIn_Username = '//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[10]/a';
  private Delete_Button ='//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[5]/a';



  async clickSignupLogin(){
    await this.page.locator(this.signupLoginLink).click();
  }

  async verifyHomePageVisible() {
    await this.page.waitForSelector(this.HomePageLogo); 
  }

  async isLogged_in_as_usernameVisible(){
    await this.page.waitForSelector(this.LoggedIn_Username);
  }

  async delete_button(){
    await this.page.click(this.Delete_Button);
  }
}