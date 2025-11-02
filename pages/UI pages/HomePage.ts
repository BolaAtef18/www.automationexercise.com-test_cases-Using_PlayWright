import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private signupLoginLink = '//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a';
  private HomePageLogo ='//*[@id="header"]/div/div/div/div[1]/div/a/img';
  private Delete_Button ='//*[@id=\"header\"]/div/div/div/div[2]/div/ul/li[5]/a';
  private ContactUs ='//*[@id="header"]/div/div/div/div[2]/div/ul/li[8]/a';
  private TestCasebutton ='//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]';
  private Productsbutton ='//*[@id="header"]/div/div/div/div[2]/div/ul/li[2]/a';
 
  async clickSignupLogin(){
    await this.page.click(this.signupLoginLink);
  }

  async verifyHomePageVisible() {
    await this.page.waitForSelector(this.HomePageLogo); 
  }

  async delete_button(){
    await this.page.click(this.Delete_Button);
  }

  async pressoncontactusbutton(){
    await this.page.click(this.ContactUs);
  }

  async pressontestcasebutton(){
    await this.page.click(this.TestCasebutton);
  }

  async pressonproductbutton(){
    await this.page.click(this.Productsbutton);
  }
}