import { Page } from '@playwright/test';

export class LogInPage {
    readonly page: Page;

    private NewUserSignUp ='//*[@id="form"]/div/div/div[3]/div/h2';
    private Name ='[data-qa="signup-name"]';
    private Email ='//*[@id="form"]/div/div/div[3]/div/form/input[3]';
    private Signeupbutton ='//*[@id="form"]/div/div/div[3]/div/form/button';
    private Logintoyouraccount='//*[@id="form"]/div/div/div[1]/div/h2';
    private loginEmail ='//*[@id="form"]/div/div/div[1]/div/form/input[2]';
    private loginpassword ='//*[@id="form"]/div/div/div[1]/div/form/input[3]';
    private loginbutton ='//*[@id="form"]/div/div/div[1]/div/form/button';


constructor(page: Page) {
    this.page = page;
  }

async verifyNewUserSignUpVisible() {
    await this.page.waitForSelector(this.NewUserSignUp);
  }

async signeup(name: string, email: string) {
    await this.page.fill(this.Name, name);
    await this.page.fill(this.Email, email);
    await this.page.click(this.Signeupbutton);
  }

   async isLogintoyouraccount(){
    await this.page.waitForSelector(this.Logintoyouraccount);
  }

  async login(loginEmail:string,loginPW:string){
    await this.page.fill(this.loginEmail,loginEmail);
    await this.page.fill(this.loginpassword,loginPW);
    await this.page.click(this.loginbutton);
  }
}