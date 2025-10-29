import { Page } from '@playwright/test';

export class ContactUsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private getintouch= '//*[@id="contact-page"]/div[2]/div[1]/div/h2';
  private Name ='//*[@id="contact-us-form"]/div[1]/input';
  private Email ='//*[@id="contact-us-form"]/div[2]/input';
  private subject ='//*[@id="contact-us-form"]/div[3]/input';
  private message ='//*[@id="message"]';
  private submitbutton ='//*[@id="contact-us-form"]/div[6]/input';


   async isgetintouchVisiable() {
    await this.page.waitForSelector(this.getintouch); 
  } 

  async enterdata(name:string,email:string,subject:string,message:string){
    await this.page.fill(this.Name,name);
    await this.page.fill(this.Email,email);
    await this.page.fill(this.subject,subject);
    await this.page.fill(this.message,message);
    await this.page.click(this.submitbutton);
  }
}